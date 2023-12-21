import { Component, OnInit, NgZone } from '@angular/core';

import { Capacitor } from '@capacitor/core';
import { BatteryInfo, Device, DeviceId, DeviceInfo } from '@capacitor/device';
import { ConnectionType, Network } from '@capacitor/network';

import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Geolocation, Position } from '@capacitor/geolocation';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    ptfName = Capacitor.getPlatform();
    isNative = Capacitor.isNativePlatform();
    isCamaraAvailable = Capacitor.isPluginAvailable('Camera');

    deviceInfo: DeviceInfo | undefined
    deviceId: DeviceId | undefined
    battery: BatteryInfo | undefined

    networkIsConnected: boolean = false
    netConnectionType: ConnectionType | undefined

    events: string[] = []

    lastStatus: String = ''

    coordinates: Position | undefined


    constructor(private platform: Platform, private ngZone: NgZone) {
        this.platform.backButton.subscribeWithPriority(-1, () => {
            console.log("app exit")
            App.exitApp();
        });

        App.addListener('resume', () => {
            this.events.unshift('onResume');
        });
        App.addListener('pause', () => {
            this.events.unshift('onPause');
        });
        App.addListener('appStateChange', ({ isActive }) => {
            this.events.unshift(isActive ? "onStart" : "onStop");
        });

        Network.getStatus().then(status => {
            this.ngZone.run(() => {
                this.networkIsConnected = status.connected;
                this.netConnectionType = status.connectionType;
            });
        });

        Device.getId().then((result: any) => { this.deviceId = result; })
        Device.getInfo().then((result: any) => { this.deviceInfo = result; })
        Device.getBatteryInfo().then((result: any) => { this.battery = result; })

        Network.addListener('networkStatusChange', status => {
            this.ngZone.run(() => {
                if (this.lastStatus != JSON.stringify(status.connectionType)) {
                    this.lastStatus = JSON.stringify(status.connectionType)
                    this.events.unshift(`Cambio de estado: ` + JSON.stringify(status.connectionType));
                }
                this.networkIsConnected = status.connected;
                this.netConnectionType = status.connectionType;
            });

        });
    }

    async ngOnInit() {
        console.log("onInit")
        this.coordinates = await Geolocation.getCurrentPosition();

    }

}
