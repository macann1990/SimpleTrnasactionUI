import { Component } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { AccountService } from  '../../Services/Account/account.service';

export interface IAccount {
  accountId: number;
  name: string;
  email: string;
  contact: string;
  balance: number;
}

const account_data : IAccount[] = [
  {accountId: 1, name: 'Macfer', email: 'MacferAnnA@hcl.com', contact: '9234567891', balance: 100},
  {accountId: 2, name: 'Hemanathan', email: 'HemanathanP@hcl.com', contact: '78345237891', balance: 500}
];

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})

export class AccountComponent  {
  displayedColumns: string[] = ['accountId', 'name', 'email', 'contact', 'delete'];
  dataSource: any[];// = account_data;

  constructor(private acctService: AccountService){
  }

   ngOnInit() {
    this.acctService.getData()
    .subscribe((data: any[]) => this.dataSource = data);
  }
}