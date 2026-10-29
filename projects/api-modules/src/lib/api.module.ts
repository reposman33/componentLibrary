import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';

@NgModule({ declarations: [],
    exports: [], imports: [], providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class ApiModule {}
