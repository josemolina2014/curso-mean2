import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// Importamos el módulo http del paquete http de Angular
import { HttpModule, JsonpModule } from '@angular/http';

//general
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent} from './components/home.component';
//user
import { UserEditComponent} from './components/user-edit.component';
//artist
import { ArtistListComponent} from './components/artist-list.component';
import { ArtistAddComponent} from './components/artist-add.component';
import { ArtistEditComponent} from './components/artist-edit.component';
import { ArtistDetailComponent} from './components/artist-detail.component';

//album
import { AlbumAddComponent} from './components/album-add.component';
import { AlbumEditComponent} from './components/album-edit.component';
import { AlbumDetailComponent} from './components/album-detail.component';

//song
import { SongAddComponent} from './components/song-add.component';
import { SongEditComponent} from './components/song-edit.component';

import { PlayerComponent} from './components/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserEditComponent,
    ArtistListComponent,
    ArtistAddComponent,
    ArtistEditComponent,
    ArtistDetailComponent,
    AlbumAddComponent,
    AlbumEditComponent,
    AlbumDetailComponent,
    SongAddComponent,
    SongEditComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
