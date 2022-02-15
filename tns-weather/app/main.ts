// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, [HTTP_PROVIDERS]);