import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
//import { Uid } from '@ionic-native/uid/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Sim } from '@ionic-native/sim/ngx';
import { Storage } from '@capacitor/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  NavController, ToastController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { Platform} from '@ionic/angular';

import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private onRegistro: UntypedFormGroup;
  private onContrasena: UntypedFormGroup;

  private stLIMEI: string="";
  private UniqueDeviceID: string="";

  private stLACCESO: string="0";
  private stLIdentifica: string="";
  private stLNombres: string="";
  private stLApellidos: string="";
  private stLCelular: string="";
  private stLUIDD: string="";
  private stLUIDDAux: any;
  private stLCargo: string="";
  private stLEmail: string="";
  private stLContrasena: string="";
  private dataPerson: any;
  private stLUrl: string="";
  stLClrFondoPan: string ="red";

  stLClrFondo: string ="";
  stLColorAsistencia: string="secondary";
  inLLinterna: number=0;
  dataAux: any;
  dataAux1: any;
   stLEstado: string="INACTIVO";
  inLCount: number=0;
  inLActivo: number=0;
  name: string;
  timeoutHandler: any;
  timeoutHandlerAux: any;
  geoposition: any;
  lat: any;
  lng: any;
  backButtonSubscription;


  constructor(private formBuilder: UntypedFormBuilder,private Http: HttpClient,
    private toastCtrl: ToastController,   private nav: NavController, private loading: LoadingService, private router: Router, public navCtrl: NavController,
    private androidPermissions: AndroidPermissions, private locationAccuracy: LocationAccuracy, private callNumber: CallNumber, private backgroundGeolocation: BackgroundGeolocation,
    private alertController: AlertController) {
      
      //Genera APK
      /*
      Storage.getItem('obUUID')
      .then(
        data => this.SrConsultaIMEI( data),
        //error => this.stLACCESO="1"
      );
      */

        

      /*const checkName = async () => {
        alert('preuba');
        const value = await Storage.get({ key: 'obUUID' });
        this.stLUIDDAux=value;
        //alert('variable: ' + value);


      }/*





     //para probar
      //this.SrConsultaIMEI("3159856231");
      //this.stLACCESO="0";
      /*
      this.getPermission();
      this.sim.requestReadPermission().then(
        () => alert('Permission granted'),
        () => alert('Permission denied')
      );


      this.sim.getSimInfo().then(
        (info) => alert('Sim info: '+ info),
        (err) => alert('Unable to get sim info: '+ err)
      );
      */

    }

    async presentAlertConfirm() {
      const infoAux = await Device.getId();
      this.stLUIDD = infoAux.uuid;
            async () => {
       await Storage.set({
         key: 'obUUID',
         value: this.stLUIDD,
        
        });}

      const alert = await this.alertController.create({

        cssClass: 'my-custom-class',
        header: 'Autorización de USO',
        message: 'Esta aplicación utiliza sus datos de ubicación, para que nuestros usuarios VIP, puedan tener asistencia lo más pronto posible, Ejemplo: Si usted esta siendo víctima de robo, al presionar este botón de pánico nuestro personal lo asistirá en su ubicación en tiempo real en el menor tiempo posible. Presione en "Autoriza" Para Continuar',
        buttons: [
          {
            text: 'NO Autorizo',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              App.exitApp();
            }
          }, {
            text: 'Autoriza',
            handler: () => {
              console.log('Confirm Okay');
              this.ValidaPermisos();
                           
              this.SrConsultaIMEI(this.stLUIDD);
            }
          }
        ]
      });

      await alert.present();
    }

    async ValidaPermisos(){
       const info = await Device.getInfo();
       const infoAux = await Device.getId();
       this.stLUIDD = infoAux.uuid;
       //alert("permisos");
       //alert(this.stLUIDD);
       async () => {
        await Storage.set({
          key: 'obUUID',
          value: this.stLUIDD,
      });}

      if(info.platform=="android")
        {


          try {
            const data = await this.androidPermissions.requestPermissions([
              "android.permission.ACCESS_BACKGROUND_LOCATION",
              "android.permission.ACCESS_COARSE_LOCATION",
              this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
            ]);


            if (!data.hasPermission) {
              throw new Error('Permiso NO Otorgado');
            }
            else{
              this.locationAccuracy.canRequest().then((canRequest: boolean) => {
                canRequest=true;
                if(canRequest) {
                  // the accuracy option will be ignored by iOS
                  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                    () => console.log('Request successful'),
                    error => alert('Error: '+ error)
                  );
                }

              });
            }
          } catch (error) {
            console.log( 'Error: Por Favor Reinicie la Aplicación '

            );
        }

      }
      const infoRequest = await Geolocation.requestPermissions();
        if( infoRequest.location=="granted")
        {
          //alert("Ejecuta")
          this.SrValidacionAPP();
        }
        else{
          alert("Dispositivo SIN GPS, Por Favor Activelo")
          //App.exitApp();

        }
    }
    async ngOnInit() {

      this.onRegistro = this.formBuilder.group({
        'stLIdentifica': [null, Validators.compose([
          Validators.required
        ])
      ],
        'stLNombres': [null, Validators.compose([
        Validators.required
        ])
      ],
        'stLApellidos': [null, Validators.compose([
         Validators.required
        ])
      ],
      'stLCelular': [null, Validators.compose([
        Validators.required
       ])
     ],
        'stLCargo': [null, Validators.compose([
         Validators.required
        ])
      ],
        'stLEmail': [null, Validators.compose([
        Validators.required
        ])
      ],

    });

    this.onContrasena = this.formBuilder.group({
      'stLContrasena': [null, Validators.compose([
        Validators.required
      ])
    ],

    });

      const infoInternet =await Network.getStatus();
      //console.log(infoInternet.connected);
      if(infoInternet.connected==true)
      {
        this.SrValidacionAPP();
      }
      else{
        alert("Dispositivo SIN INTERNET, Por Favor Activelo");
        App.exitApp();
      }
      Network.addListener('networkStatusChange', function(val)
      {
        if(val.connected)
        {
          this.SrValidacionAPP();
        }
        else{
          alert("SIN Internet");
          App.exitApp();
        }
      });
    }



	async SrValidacionAPP(){

      const CPermisoGPS = await Geolocation.checkPermissions();

      //alert("permiso: " +CPermisoGPS.location);
      if( CPermisoGPS.location=="granted")
      {
        
       
        //const value = await Storage.get({ key: 'obUUID' });
        //this.stLUIDDAux=value;
        
        //console.log(Device.getInfo());
                  
               
        //console.log(infoAux.uuid);
        //alert("uid: " +infoAux.uuid);
        
        
        this.locationAccuracy.canRequest().then((canRequest: boolean) => {
          canRequest=true;
          if(canRequest) {
            // the accuracy option will be ignored by iOS
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
              () => console.log('Request successful'),
              error => alert('Error: '+ error)
            );
          }

        });


        //const CPermisoGPS = await Geolocation.requestPermissions();
       //alert(CPermisoGPS)

        const infoAux2 = await Geolocation.getCurrentPosition();
        //alert("coord: " + infoAux2.coords.latitude +", "  + infoAux2.coords.longitude );
        //const info33 = await Device.getInfo();

        //console.log(info.platform);
        //alert("Platform: " + info33.platform);
        //alert("Virtual: " + info33.isVirtual);
        const infoAux = await Device.getId();
        this.stLUIDD = infoAux.uuid;
        //alert(this.stLUIDD);
        this.SrConsultaIMEI(this.stLUIDD);
        //this.SrConsultaIMEI("7fdabb817db61b16");

      }
      else{
       const info = await Device.getInfo();

       
        const value = await Storage.get({ key: 'obUUID' });
        
       

        const infoAux = await Device.getId();
        //console.log(Device.getInfo());
       
      this.presentAlertConfirm();


      }

    }

  private SrConsultaIMEI(data:string)
  {
    //alert("Entra");
    this.stLUIDD=data;
    //alert(this.stLUIDD);
    //this.loading.presentTxt('Oberón Consultando Registro VIP ...');
    this.SrConsultaPersona().then(data => {
    if(data["Table"] != null) {
      this.dataPerson=data["Table"];
      this.loading.dismiss();
      console.log(data["Table"]);
      //alert("estado imei");
      //alert(data["Table"][0].CLIMEI_ESTADO);
      if(data["Table"][0].Error_Code=='0')
      {
        if(data["Table"][0].CLIMEI_ESTADO=='0'||data["Table"][0].CLIMEI_ESTADO=='1')
        {
          this.stLACCESO="1";


          alert('Por Favor Ingrese su Contraseña Enviada al Correo Registrado en la Solicitud');
          

        }
        if(data["Table"][0].CLIMEI_ESTADO=='2')
          {
            //alert("entra a estado 2");
            this.stLACCESO="3";
            this.presentToast('Bienvenido Señor(a): ' + data["Table"][0].PERSO_NOMBRES + " " + data["Table"][0].PERSO_APELLIDOS);
            this.loading.m_Nombres=data["Table"][0].PERSO_NOMBRES;
            //alert(data["Table"][0].PERSO_NOMBRES);
            this.loading.m_Cargo=data["Table"][0].PERSO_CARGOID;
            //alert(data["Table"][0].PERSO_CARGOID);
            this.loading.m_IMEI=this.stLUIDD;
            //alert(this.stLUIDD);
            this.SrSegundoPlano();
            this.GetEstadoSOS();
            //this.navCtrl.navigateRoot('/home')
          
        }


      }
      else{
        alert('Error al Consultar Registro ');
      }
    }
    else{
      this.stLACCESO="0";
      //this.loading.dismiss();

    }
  });


  }

  private SrConsultaPersona() {
    this.stLUrl = this.loading.m_UrlWS + '/Get_IMEIvip';
    let headers = new HttpHeaders();
    let options = {
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };

//alert('imei');
//alert(this.stLUIDD);
    let params = 'stRIMEI='+ this.stLUIDD +'&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    //console.log(this.stLUrl+'?'+params);
      return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      
      }
      else
        resolve(false);
      });
      });
  }


  async presentToast(stRMensaje) {
    const toast = await this.toastCtrl.create({
      message: stRMensaje,
      duration: 4000
    });
    toast.present();
  }

  private SrProcesaIngreso(){
    this.loading.presentTxt('Oberón Guardando Registro VIP ...');
    this.SrIngresaPersona().then(data => {
    if(data["Table"] != null) {
      this.dataPerson=data["Table"];
      this.loading.dismiss();
      console.log(data["Table"]);
      if(data["Table"][0].Error_Code=='0')
      {
        this.presentToast('Registro Guardado Satisfactoriamente');

        async () => {
          await Storage.set({
            key: 'obUUID',
            value: this.stLUIDD,
        });}

        async () => {
          await Storage.set({
            key: 'obNombres',
            value: this.stLNombres,
        });}

        async () => {
          await Storage.set({
            key: 'obApellidos',
            value: this.stLApellidos,
        });}

        async () => {
          await Storage.set({
            key: 'obCargo',
            value: this.stLCargo,
        });}

        async () => {
          await Storage.set({
            key: 'obCelular',
            value: this.stLCelular,
        });}

        /*
        this.nativeStorage.setItem('obIMEI',this.stLCelular);
        this.nativeStorage.setItem('obNombres',this.stLNombres);
        this.nativeStorage.setItem('obApellidos',this.stLApellidos);
        this.nativeStorage.setItem('obCargo',this.stLCargo);
        */
        this.SrConsultaIMEI(this.stLUIDD);
        //this.closeModal();
      }
      else{
        alert('Error al Solicitar Registro ');
      }
    }
    else{
      this.loading.dismiss();
    }
  });
  }

  private SrIngresaPersona() {
    this.stLUrl = this.loading.m_UrlWS + '/Put_PersonasVIP_V2';
    let headers = new HttpHeaders();
    let options = {
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
        
    };

    
  //alert(this.stLUIDD);
    let params = 'stRPersona='+ this.stLIdentifica +'&stRIMEIAux='+ this.stLUIDD +'&stRApellidos=' + this.stLApellidos +'&stRNombres=' + this.stLNombres +'&stRCargo=' + this.stLCargo +'&stRTelefono=' + this.stLCelular + '&stREmail=' + this.stLEmail +'&stREstado=0&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    //console.log(this.stLUrl+'?'+params);
      return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });
  }



  private SrProcesaContrasena(){
    this.loading.presentTxt('Oberón Guardando Contraseña VIP ...');
    this.SrIngresaContrasena().then(data => {
    if(data["Table"] != null) {
      this.dataPerson=data["Table"];
      this.loading.dismiss();
      console.log(data["Table"]);
      if(data["Table"][0].Error_Code=='0' && data["Table"][0].CLIMEI_ESTADO=='2')
      {
        this.presentToast('Contrasena Aplicada Satisfactoriamente');
        //this.nativeStorage.setItem('obContrasena',this.stLContrasena);
        async () => {
          await Storage.set({
            key: 'obContrasena',
            value: this.stLContrasena,
        });}

        //this.navCtrl.navigateRoot('/home');
        this.SrConsultaIMEI(this.stLUIDD);
        //this.closeModal();
      }
      else{
        alert('Error al Registrar Contraseña ');
      }
    }
    else{
      this.loading.dismiss();
    }
  });
  }

  private SrIngresaContrasena() {
    this.stLUrl = this.loading.m_UrlWS + '/Put_MEI_VIP_ACCESS';
    let headers = new HttpHeaders();
    let options = {
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };

//alert("CONTRASENA");
//alert(this.stLUIDD);
//alert(this.stLContrasena);
    let params = 'stRIMEI='+ this.stLUIDD +'&stRPassword='+ this.stLContrasena +'&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    console.log(this.stLUrl+'?'+params);
      return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });
  }

  onLlamar(){
    this.GetTelCentral();
  }


  private GetTelCentral()
  {


    this.loading.presentTxt('Oberón Obteniendo Telefóno del Centro de Control ...');
    this.SrBuscaTelCentral().then(data => {
    if(data["Table"] != null) {
      this.dataAux=data["Table"];
      this.loading.dismiss();
      console.log(data["Table"]);
      if(data["Table"][0].Error_Code=='0')
      {
        let stLTelefono=data["Table"][0].CODIR_TELEFONO;
        if(stLTelefono!="")
        {
          this.loading.dismiss();
          this.callNumber.callNumber(stLTelefono, true)


        }
        else{
          this.loading.dismiss();
          alert("NO Tiene Asignado el Número del Centro de Control. Contacte al Administrador")

        }
      }
      else{
        alert('Error al Consultar Teléfono ');
      }
    }
    else{
      this.loading.dismiss();
    }
  });


  }

  private SrBuscaTelCentral() {
    this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
    let options = {
      headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };
    this.stLUrl = this.loading.m_UrlWS + '/GetTelCentral';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let params = 'stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });

  }
  SrPanico(){

    this.SrProcesaSOS();
    this.onActivar();


  }

  private SrProcesaSOS(){
    //this.loading.presentTxt('Oberón Enviando SOS ...');
    //alert("ingreso sos");
    this.SrIngresaSOS().then(data => {
    if(data["Table"] != null) {
      this.dataPerson=data["Table"];
      //this.loading.dismiss();
      console.log(data["Table"]);
      if(data["Table"][0].Error_Code=='0')
      {
        this.presentToast('S.O.S');
        //if(this.inLActivo==0)
        //{

        //}

        //this.closeModal();
      }
      else{
        alert('Error al Reportar S.O.S');
      }
    }
    else{
      //this.loading.dismiss();
    }
  });
  }




  async SrIngresaSOS() {
    this.stLUrl = this.loading.m_UrlWS + '/Put_Alertas';
    let headers = new HttpHeaders();
    let options = {
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };
    //alert("SOS 0");
    //alert(this.stLUIDD);

    const coordinates = await Geolocation.getCurrentPosition();
    //alert("SOS");
    //alert(this.stLUIDD);
    //alert(coordinates.coords.latitude);
    //alert(coordinates.coords.longitude);
    let params = 'stRReferencia='+  this.stLUIDD +'&stRTipo=1&stRLatitud='+ coordinates.coords.latitude +'&stRLongitud='+ coordinates.coords.longitude +'&stRUbicacion=0&stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    console.log(this.stLUrl+'?'+params);
      return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });
  }

  async getCurrentPosition() {
    //alert("posicion");
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates
  }



  async SrSegundoPlano(){
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      //interval: 60000,
      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      notificationTitle: 'Oberón',
      notificationText: 'Servicio Activo',
  };

  this.backgroundGeolocation.configure(config)
  .then(() => {

    this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
      //alert(location.latitude);
      this.SrProcesaTracking();
      //this.SrProcesaTracking();
      // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
      // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      this.backgroundGeolocation.finish(); // FOR IOS ONLY
    });

  });
  this.backgroundGeolocation.start();
  }




  private SrProcesaTracking(){
    //this.loading.presentTxt('Oberón Enviando SOS ...');
    this.SrIngresaTracking().then(data => {
    if(data["Table"] != null) {
      this.dataPerson=data["Table"];
      //this.loading.dismiss();
      console.log(data["Table"]);
      if(data["Table"][0].Error_Code=='0')
      {
        //this.presentToast('Tracking');


        //this.closeModal();
      }
      else{
        //alert('Error al Reportar S.O.S');
      }
    }
    else{
      //this.loading.dismiss();
    }
  });
  }

  async SrIngresaTracking() {
    this.stLUrl = this.loading.m_UrlWS + '/Put_Tracking';
    let headers = new HttpHeaders();
    let options = {
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };


    const coordinates = await Geolocation.getCurrentPosition();

    let params = 'stRDispositivo='+  this.stLUIDD +'&stRLatitud='+ coordinates.coords.latitude +'&stRLongitud='+ coordinates.coords.longitude +'&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;

    console.log(this.stLUrl+'?'+params);
      return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });
  }

  private onActivar(){
    this.inLActivo=1;
    this.stLColorAsistencia="danger";
    this.stLEstado="ACTIVO";


    const options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 7200
    };

    //this.SrProcesaSOS();
    let timeInMs = 39000;

    this.timeoutHandlerAux = setInterval(() => {
      this.GetEstadoSOS();

      //this.GetEstadoSOS();
    }, timeInMs);


    let timeInMsAux = 40000;

    this.timeoutHandlerAux = setInterval(() => {
      //alert(this.inLActivo);
      if(this.inLActivo==1)
      {
        this.SrProcesaSOS();
      }
    }, timeInMsAux);


  }


  private GetEstadoSOS()
  {


    //this.loading.presentTxt('Oberón Obteniendo Estado SOS ...');
    this.SrBuscaEstadoSOS().then(data => {
    if(data["Table"] != null) {
      this.dataAux1=data["Table"][0];
      //this.loading.dismiss();

      if( this.dataAux1.Error_Code=='0')
      {

        this.inLActivo= this.dataAux1.ALERTA_ACTIVA;
        //alert(this.inLActivo);
        if(this.inLActivo==1)
        {
          this.onActivar();
        }

        if(this.inLActivo==0)
        {
          this.stLColorAsistencia="secondary";
           this.stLEstado="INACTIVO";
           //alert(this.inLCount);
           clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
            clearTimeout(this.timeoutHandlerAux);
            this.timeoutHandlerAux = null;
           this.inLCount=0;
           this.inLActivo=0;
        }
        //this.inLActivo=1;

        //this.backgroundMode.enable();
      }
      else{
        this.stLColorAsistencia="secondary";
           this.stLEstado="INACTIVO";
           //alert(this.inLCount);
           clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
            clearTimeout(this.timeoutHandlerAux);
            this.timeoutHandlerAux = null;
           this.inLCount=0;
           this.inLActivo=0;
      }
    }
    else{
      //this.loading.dismiss();
    }
  });


  }

  private SrBuscaEstadoSOS() {
    //this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
    let options = {
      headers: {'Content-Type':'application/x-www-form-urlencoded'}
    };
    this.stLUrl = this.loading.m_UrlWS + '/Get_Alerta_Activa';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let params = 'stRImei='+ this.stLUIDD +'&stRUsuarioAPP=' + this.loading.m_UsuarioApp +'&stRPasswordAPP='+ this.loading.m_PasswordApp +'&stRCodigoWSAPP='+ this.loading.m_CodigoWSApp;
    console.log(this.stLUrl+'?'+params);
    return new Promise(resolve => {
      //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
      this.Http.post(this.stLUrl,params,options).subscribe(data => {
      if(data!=null){
        resolve(data);
      }
      else
        resolve(false);
      });
      });

  }

}
