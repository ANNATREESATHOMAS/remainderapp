import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

users:any={

}
currentUserName:any
currentId:any

  constructor(private http:HttpClient) { }

register(uname:any,id:any,password:any){
const data={
  uname,
  id,
  password
}
return this.http.post('http://localhost:3000/register',data)
}

login(id:any,password:any){
  const data={
    id,
    password
  }
return this.http.post('http://localhost:3000/login',data)
}
eventHistory()
  {
    
    return this.http.post('http://localhost:3000/eventHistory', "", this.getOptions())
  }

event(eventName:any, eventDate:any){
  const data={
    eventName,
    eventDate
  }
return this.http.post('http://localhost:3000/event',data,this.getOptions())
}
// deleteevent(eventName:any, eventDate:any){
//   const data={
//     eventName,
//     eventDate
//   }
// return this.http.post('http://localhost:3000/deleteevent',data,this.getOptions())
// }
getOptions(){
  const token=JSON.parse (localStorage.getItem("token")||'')
  let headers=new HttpHeaders()
  if(token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
}
delete(id:any){

return this.http.delete('http://localhost:3000/deleteAcc/'+id, this.getOptions())
}
}
