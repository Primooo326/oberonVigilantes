(self["webpackChunkOberonVIP"] = self["webpackChunkOberonVIP"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);









//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
let HomePage = class HomePage {
    //---------------------------------------
    constructor(loading, toastCtrl, callNumber, Http, geolocation, platform, alertController) {
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.callNumber = callNumber;
        this.Http = Http;
        this.geolocation = geolocation;
        this.platform = platform;
        this.alertController = alertController;
        this.stLClrFondo = "";
        this.stLClrFondoPan = "red";
        this.stLColorAsistencia = "secondary";
        this.inLLinterna = 0;
        this.stLUrl = "";
        this.stLEstado = "INACTIVO";
        this.inLCount = 0;
        this.inLActivo = 0;
        //---------------------------------------
        this.appMenu = [
            {
                id: '1',
                title: 'Apertura y Cierre de Turnos',
                description: 'No Olvidar Abrir y Cerrar su Turno',
                url: '/asistencia/empleados/',
                direct: 'root',
                icon: 'assets/img/Menu/house01sq.jpg',
                turno: "turno",
                turnoC: "ST"
            },
            {
                id: '2',
                title: 'Directorio Telefónico',
                description: 'Contactos de la Instalación',
                url: '/directorio/',
                direct: 'directorio',
                icon: 'assets/img/Menu/house02sq.jpg',
                turno: "turno",
                turnoC: "ST"
            }
        ];
        this.GetEstadoSOS();
    }
    onLlamar() {
        this.GetTelCentral();
    }
    presentToast(stRMensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: stRMensaje,
                duration: 4000
            });
            toast.present();
        });
    }
    GetTelCentral() {
        this.loading.presentTxt('Oberón Obteniendo Telefóno del Centro de Control ...');
        this.SrBuscaTelCentral().then(data => {
            if (data["Table"] != null) {
                this.dataAux = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    let stLTelefono = data["Table"][0].CODIR_TELEFONO;
                    if (stLTelefono != "") {
                        this.loading.dismiss();
                        this.callNumber.callNumber(stLTelefono, true);
                    }
                    else {
                        this.loading.dismiss();
                        alert("NO Tiene Asignado el Número del Centro de Control. Contacte al Administrador");
                    }
                }
                else {
                    alert('Error al Consultar Teléfono ');
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrBuscaTelCentral() {
        this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        this.stLUrl = this.loading.m_UrlWS + '/GetTelCentral';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    onPanico() {
        this.stLColorAsistencia = "warning";
        let timeInMs = 5000;
        let timeout = setTimeout(() => {
            //alert("Hola");
            this.stLColorAsistencia = "danger";
        }, timeInMs);
    }
    closeApp() {
        this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            console.log('Back press handler!');
            processNextHandler();
        });
        this.platform.backButton.subscribeWithPriority(5, () => {
            console.log('Handler called to force close!');
            this.alertController.getTop().then(r => {
                if (r) {
                    navigator['app'].exitApp();
                }
            }).catch(e => {
                console.log(e);
            });
        });
    }
    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }
    holdCount() {
        //alert("Entra");
        if (this.inLActivo == 0) {
            this.stLColorAsistencia = "warning";
            this.stLEstado = "ACTIVANDO";
            this.timeoutHandler = setInterval(() => {
                ++this.inLCount;
                //this.onActivar();
            }, 1000);
        }
    }
    onActivar() {
        this.stLColorAsistencia = "danger";
        this.stLEstado = "ACTIVO";
        this.inLActivo = 1;
        const options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 7200
        };
        /*
          const subscription = this.geolocation.watchPosition(options).subscribe(position => {
            if ((position as Geoposition).coords != undefined) {
               this.geoposition = (position as Geoposition);
              this.lat=this.geoposition.coords.latitude;
              this.lng=this.geoposition.coords.longitude;
              
              //console.log('Latitude: ' + this.geoposition.coords.latitude + ' - Longitude: ' + this.geoposition.coords.longitude);
            } else {
              var positionError = (position as PositionError);
              //alert('Error ' + positionError.code + ': ' + positionError.message);
            }
        });
        */
        this.SrProcesaSOS();
        let timeInMs = 40000;
        this.timeoutHandlerAux = setInterval(() => {
            this.SrProcesaSOS();
            //this.GetEstadoSOS();
        }, timeInMs);
        let timeInMsAux = 30000;
        this.timeoutHandlerAux = setInterval(() => {
            //this.SrProcesaSOS();
            this.GetEstadoSOSAux();
        }, timeInMsAux);
        /*
            this.backgroundMode.on('activate').subscribe(() => {
              this.backgroundMode.disableWebViewOptimizations();
              //this.backgroundMode.disableBatteryOptimizations();
              setInterval(() => {
                this.SrProcesaSOS();
                //this.GetEstadoSOS();
          
                      },30000);
            });
            
        */
        //this.SrSegundo_plano();
    }
    /*
    SrSegundo_plano(){
    
      
    
    
        this.backgroundMode.on('activate').subscribe(() => {
          let timeInMs = 30000;
        
          this.timeoutHandlerAux = setInterval(() => {
            this.SrProcesaSOS();
            //this.GetEstadoSOSAux();
          }, timeInMs);
    
        });
    
        this.backgroundMode.enable();
        
      }
    */
    endCount() {
        if (this.inLActivo == 0) {
            if (this.inLCount >= 1) {
                this.onActivar();
                //this.backgroundMode.enable();
            }
            else {
                this.stLColorAsistencia = "secondary";
                this.stLEstado = "INACTIVO";
                if (this.timeoutHandler) {
                    //alert(this.inLCount);
                    clearTimeout(this.timeoutHandler);
                    this.timeoutHandler = null;
                    this.inLCount = 0;
                    this.inLActivo = 0;
                }
            }
        }
        /*
        alert(this.inLCount);
        if(this.inLActivo==0)
        {
         this.stLColorAsistencia="secondary";
         this.stLEstado="INACTIVO";
        }
        
        this.inLCount=0;
        */
        /*
        else{
         let timeInMs = 5000;
         let timeout= setTimeout( () => {
             alert("Hola");
             this.stLColorAsistencia="danger";
         }, timeInMs );
         
        }
       /*
       this.stLColorAsistencia="danger";
       this.stLEstado="ACTIVO";
     
       alert(this.timeoutHandler);
       */
    }
    SrProcesaSOS() {
        this.loading.presentTxt('Oberón Enviando SOS ...');
        this.SrIngresaSOS().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    this.presentToast('S.O.S');
                    //this.closeModal();
                }
                else {
                    alert('Error al Reportar S.O.S');
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrIngresaSOS() {
        this.stLUrl = this.loading.m_UrlWS + '/Put_Alertas';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders();
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        let params = 'stRReferencia=' + this.loading.m_IMEI + '&stRTipo=1&stRLatitud=' + this.lat + '&stRLongitud=' + this.lng + '&stRUbicacion=0&stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        //console.log(this.stLUrl+'?'+params);
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    GetEstadoSOSAux() {
        this.loading.presentTxt('Oberón Obteniendo Estado SOS ...');
        this.SrBuscaEstadoSOS().then(data => {
            if (data["Table"] != null) {
                this.dataAux = data["Table"];
                this.loading.dismiss();
                if (data["Table"][0].Error_Code == '0') {
                    //this.inLActivo=data["Table"][0].ESTADO;
                    this.inLActivo = 1;
                }
                else {
                    this.stLColorAsistencia = "secondary";
                    this.stLEstado = "INACTIVO";
                    this.inLCount = 0;
                    this.inLActivo = 0;
                    //this.backgroundMode.disable();
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    GetEstadoSOS() {
        this.loading.presentTxt('Oberón Obteniendo Estado SOS ...');
        this.SrBuscaEstadoSOS().then(data => {
            if (data["Table"] != null) {
                this.dataAux = data["Table"];
                this.loading.dismiss();
                if (data["Table"][0].Error_Code == '0') {
                    //this.inLActivo=data["Table"][0].ESTADO;
                    this.inLActivo = 1;
                    this.onActivar();
                    //this.backgroundMode.enable();
                }
                else {
                    this.stLColorAsistencia = "secondary";
                    this.stLEstado = "INACTIVO";
                    this.inLCount = 0;
                    this.inLActivo = 0;
                    //this.backgroundMode.disable();
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrBuscaEstadoSOS() {
        //this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        this.stLUrl = this.loading.m_UrlWS + '/get_Estado_SOS';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'stRReferencia=' + this.loading.m_IMEI + '&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content {\n  --background: var(--ion-color-white);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-dark);\n}\n:host ion-card {\n  border-radius: 0;\n}\n:host .LblTitulo {\n  font-weight: normal;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  font-size: 13px;\n  font-size: max(13px, 1em);\n  min-height: 9px;\n}\n:host .fondo {\n  background: var(--ion-color-btn);\n}\n:host .fondoEnc {\n  background-color: #f20141;\n}\n:host .clscliente {\n  --background: var(--ion-color-dark);\n  min-height: 10px;\n}\n:host .clspuesto {\n  --background: var(--ion-color-dark);\n  min-height: 10px;\n}\n:host .bg-btn {\n  background: url(\"/assets/img/pn-btn.png\");\n}\n:host .principal {\n  width: 100vw;\n  height: 64.5vh;\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n:host .btnpanic {\n  width: 98%;\n  top: 53%;\n  left: 50%;\n}\n:host .center {\n  margin: 0;\n  position: absolute;\n  top: 53%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 95%;\n}\n:host .hover01 figure img {\n  transform: scale(1.2);\n  transition: 0.3s ease-in-out;\n}\n:host .hover01 figure:active img {\n  transform: scale(0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUksb0NBQUE7QUFETjtBQUlFO0VBQ0ksZ0JBQUE7RUFDQSwrQ0FBQTtBQUZOO0FBS0U7RUFDSSxnQkFBQTtBQUhOO0FBS0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSxnQ0FBQTtBQUpKO0FBT0E7RUFDRSx5QkFBQTtBQUxGO0FBU0E7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQVlBO0VBQ0UseUNBQUE7QUFWRjtBQWFBO0VBRUUsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBWkY7QUFjQTtFQUVFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWJGO0FBa0JBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLFVBQUE7QUFoQkY7QUFvQkE7RUFFQSxxQkFBQTtFQUVBLDRCQUFBO0FBbEJBO0FBb0JBO0VBRUEscUJBQUE7QUFsQkEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKVxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuTGJsVGl0dWxve1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1zaXplOiBtYXgoMTNweCwgMWVtKTtcbiAgICBtaW4taGVpZ2h0OiA5cHg7XG59XG5cbiAgLmZvbmRvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTtcbn1cblxuLmZvbmRvRW5jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZjIwMTQxO1xufVxuXG5cbi5jbHNjbGllbnRle1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgbWluLWhlaWdodDogMTBweDtcbn1cblxuLmNsc3B1ZXN0b3tcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG5cblxuLmJnLWJ0biB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3BuLWJ0bi5wbmdcIik7XG59XG5cbi5wcmluY2lwYWx7XG4gIFxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNjQuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRucGFuaWN7XG4gIFxuICB3aWR0aDogOTglO1xuICB0b3A6IDUzJTtcbiAgbGVmdDogNTAlO1xuICAvL2hlaWdodDogYXV0bztcbiAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MyU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDk1JTtcbiAgLy9oZWlnaHQ6IDI1MHB4O1xufVxuXG4uaG92ZXIwMSBmaWd1cmUgaW1nIHtcbi13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xudHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG50cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaG92ZXIwMSBmaWd1cmU6YWN0aXZlIGltZyB7XG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbnRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxufVxuXG5cbi8vIGlvbi1pdGVtIHtcbi8vICAgICAuaXRlbS1uYXRpdmUge1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbi8vICAgICB9XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <!--<ion-menu-button auto-hide=\"false\"></ion-menu-button>-->\n    </ion-buttons>\n   \n\n    <ion-title>OBERÓN V.I.P.</ion-title>\n    <!--\n    <ion-buttons slot=\"end\">\n      \n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge [color]=\"stLColorNotifica\" slot=\"end\">{{inLContadorNotifica}}</ion-badge>\n       \n        \n      </ion-button>\n     \n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"closeApp()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n        \n      </ion-button>\n    </ion-buttons>\n  -->\n  </ion-toolbar>\n  <ion-toolbar color=\"light\" class=\"ion-text-center\">\n    <p>\n        <!--<ion-note color=\"white\" style=\"font-weight: bold; font-size: 17px;\">{{stLNomCliente}}</ion-note><br />\n        <ion-note color=\"light\">{{stLNomUbicacion}}</ion-note>-->\n        <ion-note color=\"dark\" style=\"font-weight: bold; font-size: 17px;\">V.I.P.</ion-note><br />\n        <!--<ion-note color=\"secondary\">Patio Jardín</ion-note>-->\n    </p>\n\n     \n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding\" fixed>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          \n          <ion-button class=\"ion-no-margin\" class=\"LblTitulo\" expand=\"full\" size=\"large\" [color]=\"stLColorAsistencia\"  >\n            <ion-label class=\"ion-text-center\" style=\"font-weight: bold; font-size: 20px;\">{{stLEstado}}</ion-label>\n          </ion-button>\n        \n        </ion-col>\n        <!--\n        <ion-col class=\"ion-no-padding\">\n          <ion-button class=\"ion-no-margin\" expand=\"full\" size=\"large\" color=\"primary\" (click)=\"openPropertyListPage('rent')\">\n            For Rent\n          </ion-button>\n        </ion-col>\n        -->\n      </ion-row>\n\n      <div class=\"ion-no-margin\">\n        <button ion-button clear (touchstart)=\"holdCount()\" (touchend)=\"endCount()\"  >\n        <div class=\"center hover01 column\"  >\n        \n          <!--\n            <input type=\"image\" src=\"main/img/bg/pn-btn.png\" alt=\"Submit\" width=\"350\" height=\"350\">\n          -->\n           <!--<ion-button class=\"btnpanic\" color=\"light\">-->\n          \n            <figure >  <img  \n            \n             src=\"/assets/img/pn-btn.png\"  /></figure>\n          <!--\n          </ion-button>\n        -->\n      \n        </div>\n      </button>\n      </div>\n\n    </ion-grid>\n    <!--\n    <ion-button class=\"ion-margin\" expand=\"full\" color=\"secondary\" (click)=\"openPropertyListPage()\">\n      {{ 'app.button.moreresults' | translate }}\n    </ion-button>\n    -->\n</ion-content>\n\n<ion-footer class=\"animated fadeIn\">\n  <ion-toolbar color=\"dark\">\n    <ion-grid class=\"ion-no-padding\">\n     \n        <ion-row>\n           <!--\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-button size=\"small\" [ngStyle]=\"{'background-color': stLClrFondo}\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"SrOnLinterna()\">\n              <ion-icon slot=\"start\" [ios]=\"'sunny-outline'\" [md]=\"'sunny-sharp'\"></ion-icon>\n              Linterna\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding\"   >\n              <ion-button  size=\"small\" [ngStyle]=\"{'background-color': stLClrFondoPan}\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"onPanico()\">\n                <ion-icon slot=\"start\" [ios]=\"'warning-outline'\" [md]=\"'warning-sharp'\" ></ion-icon>\n                Panico\n              </ion-button>\n            </ion-col>\n      -->\n          <ion-col [ngStyle]=\"{'background-color': stLClrFondoPan}\" size=\"12\" class=\"ion-no-padding\"   >\n            <ion-button  size=\"small\" [ngStyle]=\"{'background-color': stLClrFondoPan}\"  expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"onLlamar()\">\n              <ion-icon slot=\"start\" [ios]=\"'call-outline'\" [md]=\"'call-sharp'\"  ></ion-icon>\n              Centro de Control\n            </ion-button>\n          </ion-col>\n\n\n\n        </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map