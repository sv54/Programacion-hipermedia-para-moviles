import { Component, OnInit } from '@angular/core';

import { Capacitor } from '@capacitor/core';
import { BatteryInfo, Device, DeviceId, DeviceInfo } from '@capacitor/device';
import { ConnectionType, Network } from '@capacitor/network';


import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

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

    constructor(private platform: Platform) {
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

        Device.getId().then(result => { this.deviceId = result; })
        Device.getInfo().then(result => { this.deviceInfo = result; })
        Device.getBatteryInfo().then(result => { this.battery = result; })

        Network.getStatus().then(status => {
            this.networkIsConnected = status.connected;
            this.netConnectionType = status.connectionType;

        });
        // Network.addListener('networkStatusChange', status => {
        //     this.netConnectionType = status.connectionType;
        // });
        // Network.removeAllListeners();


    }
    ngOnInit(): void {
        console.log("onInit")
        //throw new Error('Method not implemented.');
    }

}
