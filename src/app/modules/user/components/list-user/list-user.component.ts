import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrudService } from '../../../shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteItemComponent } from '../../../shared/components/delete-item/delete-item.component';
import { ViewUserComponent } from '../view-user/view-user.component';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  @ViewChild('listUsers') listUsers: ElementRef<HTMLElement>;

  isLoading: boolean = true;
  dataSource: any = null;
  slide: boolean = false;

  isAddUser: boolean = false;
  isEditUser: boolean = false

  displayedColumns: any ;
  listUserColumn: string = 'col-md-12';
  addUserColumn: string = 'd-none'
  editUserColumn: string = 'd-none'
  userId: number ;



  allowedColumns: any = [
    {def:'pic', slideShow: false},
    {def: 'username', slideShow: true},
    {def: 'email',  slideShow: true},
    {def: 'role', slideShow:true},
    {def: 'actions', slideShow: false}
  ];

  constructor(private _userService: UserService, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.getCollumnDefinitions();
    this.loadAllUsers();
  }


async  loadAllUsers(){

  try{
    this.isLoading = true;
    let resObject =  await this._userService.fetchAllUsers();

    if(resObject){
      this.dataSource = resObject.data;
      this.dataSource.paginator = this.paginator;
    }
    
  }catch(error){
    console.error(error)
  }finally{
    this.isLoading = false;
  }

    

    // this._crudService.fetchAll("/user/admin/list").subscribe(data=>{
      
    //   if(data.data == null){
    //     this._toastr.info("No users found. 🥺","",{
    //       timeOut:2000
    //     })
    //   }else{
    //     this.dataSource = data.data;
    //     this.dataSource.paginator = this.paginator;
    //   }
      
    //   this.isLoading = false;
    // }, error=>{
    //   this._toastr.error("Oops an error. 🥺","",{
    //     timeOut:2000
    //   })
    // })
  }

  getCollumnDefinitions(){
    if(this.slide){
      this.displayedColumns = this.allowedColumns
                                  .filter(col => col.slideShow == true ).map(cd => cd.def);
    }else{
      this.displayedColumns = this.allowedColumns.map(cd => cd.def);
    }

  }

  addUser(){
    this.slide = true;
    this.getCollumnDefinitions();
    this.listUserColumn = 'col-md-6 ';
    this.addUserColumn = 'col-md-6';
    this.isAddUser = true;
  }

  listUser(){

    this.slide = false;
    this.getCollumnDefinitions();
    this.listUserColumn = 'col-md-12';
    this.addUserColumn = 'd-none';
    this.editUserColumn = 'd-none';
    this.isAddUser = false;
  }


  editUser(id){
   
    this.slide = true;
    this.getCollumnDefinitions();
    this.listUserColumn = 'col-md-6 ';
    this.editUserColumn = 'col-md-6';
    this.isAddUser = true;
    this.userId = id;
  }

  newUserCreated(event: any){
    this.listUser();
    this.loadAllUsers();
  }


  deleteUser(id: string){

    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: {id, model: 'user'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._snackBar.open("User Deleted 🙂  ", "", {
          duration: 2000,
        });
       this.loadAllUsers()

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }

  viewUser(user){

    const dialogRef = this.dialog.open(ViewUserComponent, {
      width: '600px',
      height: '300px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    });

  }

 
  
}
