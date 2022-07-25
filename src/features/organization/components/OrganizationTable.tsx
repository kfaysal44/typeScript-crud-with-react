import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { OrganizationModel } from '../models/OrganizationModel';

interface IOrganizationTableProps {
  list:Array<OrganizationModel>
  deleteTask:(value:OrganizationModel)=> void;
  editdata:(value:OrganizationModel)=> void;
} 

const OrganizationTable:React.FC<IOrganizationTableProps> = (props) => {
  const headerTemplate= (rowData: OrganizationModel) => {
    return (
      <div>
        <i className="pi pi-times edit"  onClick={() => props.deleteTask(rowData)} />
        <i className="pi pi-pencil" onClick={() =>  props.editdata(rowData)}  />
      </div>
    );
  };
  return (
    <div>
    <DataTable value={props.list}>
          <Column field="id" header="Id"></Column>
          <Column field="firstName" header="First Name"></Column>
          <Column field="organizationName" header="Organization Name"></Column>
          <Column field="address" header="Address"></Column>
          <Column body={headerTemplate} header="Action" />
        </DataTable>
    </div>
  )
}

export default OrganizationTable
