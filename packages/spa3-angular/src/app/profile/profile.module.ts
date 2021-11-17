import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { createCustomElement } from '@angular/elements';

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const ce = createCustomElement(ProfileModule, {injector: this.injector});
        customElements.define('profile-element', ce);
    }
}
