import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable()
export class DBConnect{
    constructor(private http:HttpClient){    }
   
    loadUserFromDB(){
        // console.log("Loading from DB");
        return this.http.get('link/data.json').pipe(
            map(responseData => {
                const postsArray:any[] = [];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                        postsArray.push({...responseData[key],id:key});
                    }
                }
                return postsArray;
            })
        );
    }
}