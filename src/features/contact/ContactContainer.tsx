
// import { useState } from "react";
// // import { useForm} from "react-hook-form";

// import { ContactModel } from "./model/ConatctModel";
// import AddContact from "./components/AddContact";
// import ContactGrid from "./components/ContactGrid";
// import { OrganizationModel } from "../organization/models/OrganizationModel";
// import { UseFormSetValue } from "react-hook-form";



// interface IConatactContainerProps{
//   setValue: UseFormSetValue<OrganizationModel>
// }



// const ContactContainer: React.FC<IConatactContainerProps> = (props) => {
//     // const {reset,} = useForm<ContactModel>();
//   const [dataList, setDataList] = useState<Array<ContactModel>>([]);
//   const [editList, setEditList] = useState<ContactModel>({} as ContactModel);

//   const onSubmitContainer = (value: ContactModel) => {
    
//     let index = dataList.findIndex((b) => b.id === value.id);
//     if (index > -1) {
//         dataList[index] = value;
//         console.log("data Updated", dataList); 
    
//     } else{
//     console.log("data add", value);
//     const dataListCopy = [...dataList];
//     var maxNumber = 100;
//     var randomNumber = Math.floor(Math.random() * maxNumber + 1);
//     value.id = randomNumber;
//     dataListCopy.push(value);
   
//     setDataList(dataListCopy);
//     props.setValue("contact",dataList)
  

//   };
// } 
// const deleteContact  = (e: { id: number }) => {
//     debugger;
//     const rows = [...dataList];

//     let index = rows.findIndex((a) => a.id === e.id);

//     console.log(index);
//     rows?.splice(index, 1);
//     setDataList(rows);
//   };
//   const editData = (e:{id:number}) => {
//     debugger;
//     // if this task has the same ID as the edited task
//     let index = dataList.findIndex((b) => b.id === e.id);
//     const value = dataList[index];
//     setEditList(value);
//     console.log(editList)
//     console.log("edit data In Container", value);
//   };
 
//   return (
//     <div>
   
//         <AddContact onSubmit={onSubmitContainer} editList={editList}  />
//       <ContactGrid list={dataList} deleteContact={deleteContact}  editdata={editData} />
//     </div>
//   );
// };

// export default ContactContainer;
import React from 'react'

const ContactContainer = () => {
  return (
    <div>
      
    </div>
  )
}

export default ContactContainer
