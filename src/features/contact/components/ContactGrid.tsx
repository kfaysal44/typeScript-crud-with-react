import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ContactModel } from '../model/ConatctModel';


interface IContactGridProps {
  list:Array<ContactModel>
  deleteContact:(value:ContactModel)=>void
  editdata:(value:ContactModel)=>void
} 

const ContactGrid:React.FC<IContactGridProps> = (props) => {
  const actionHeader= (contactRow: ContactModel) => {
    return (
      <div>
        <i className="pi pi-times edit"  onClick={() => props.deleteContact(contactRow)} />
        <i className="pi pi-pencil" onClick={() =>  props.editdata(contactRow)}  />
      </div>
    );
  };
  return (
    <div>
    <DataTable value={props.list}>
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="telecom" header="Telecom Name"></Column>
          <Column field="purpose" header="Purpose"></Column>
          <Column field="address" header="Address"></Column>
          <Column body={actionHeader} header="Action" />
        </DataTable>
    </div>
  )
}

export default ContactGrid
