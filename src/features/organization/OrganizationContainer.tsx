import AddOrganization from './components/AddOrganization'
import OrganizationTable from "./components/OrganizationTable";
import { useState } from "react";
import { OrganizationModel} from "./models/OrganizationModel";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// import { useForm } from "react-hook-form";
const OrganizationContainer: React.FC = () => {
  // const {
  //   reset,
  // } = useForm<OrganizationModel>();
  const [dataList, setDataList] = useState<Array<OrganizationModel>>([]);
  const [editList, setEditList] = useState<OrganizationModel>({} as OrganizationModel);
  const [isopen, setIsOpen] = useState<boolean>(false);
  const onSubmitContainer = (value: OrganizationModel) => {
    
    let index = dataList.findIndex((b) => b.id === value.id);
    
    if (index > -1) {

        dataList[index] = value;
        console.log("data Updated", dataList); 
    } else{
    console.log("value", value);
    const dataListCopy = [...dataList];
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    value.id = randomNumber;
    dataListCopy.push(value);
    setDataList(dataListCopy);
  };
} 

  const deleteTask  = (e: { id: number }) => {
    debugger;
    const rows = [...dataList];
    let index = rows.findIndex((a) => a.id === e.id);
    console.log(index);
    rows?.splice(index, 1);
    setDataList(rows);
  };
  const editData = (e:{id:number}) => {
    debugger;
    // if this task has the same ID as the edited task
    let index = dataList.findIndex((b) => b.id === e.id);
    const value = dataList[index];
    setEditList(value);
    console.log(editList)
    setIsOpen(true)
    console.log("edit data In Container", value);
  };
  const cities = [
    { label: "Multan", value: "ML" },
    { label: "Raheem Yar Khan", value: "RK" },
    { label: "Lahore", value: "LH" },
    { label: "Islamabad", value: "ISB" },
    { label: "Karachi", value: "KHI" },
  ];
  
  return (
    <div>
      
      <OrganizationTable list={dataList} deleteTask={deleteTask} editdata={editData}  />
      <Button label="Add" onClick={()=>setIsOpen(true)} 
  
    />
      <Dialog visible={isopen} onHide={() => setIsOpen(false)}>
        <AddOrganization onSubmit={onSubmitContainer}
        onClose={(value: boolean) => setIsOpen(value)}
        editList={editList} cities={cities}          />
        
      </Dialog>
    </div>
  );
};

export default OrganizationContainer;
