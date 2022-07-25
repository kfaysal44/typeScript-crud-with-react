import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { OrganizationModel } from "../models/OrganizationModel";
import { Dropdown } from "primereact/dropdown";
import ContactGrid from "../../contact/components/ContactGrid";
import AddContact from "../../contact/components/AddContact";
import { ContactModel } from "../../contact/model/ConatctModel";
interface IAddOrganizationProps {
  onSubmit: (value: OrganizationModel) => void;
  onClose: (value: boolean) => void;
  editList: OrganizationModel;
  cities:{
    label: string;
    value: string;
}[];
}
const AddOrganization: React.FC<IAddOrganizationProps> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<OrganizationModel>();
  useEffect(() => {
    console.log("edit data", props.editList);
    reset(props.editList);
  }, [props.editList, reset]);

  const submitForm: SubmitHandler<OrganizationModel> = (
    data: OrganizationModel
  ) => {
    debugger;

    props.onSubmit(data);
    props.onClose(false);
    console.log(data);
    reset({
      id: 0,
      address: "",
      firstName: "",
      city: "",
      organizationName: "",
    } as OrganizationModel);
  };


  const [dataList, setDataList] = useState<Array<ContactModel>>([]);
  const [editContactList, setEditContactList] = useState<ContactModel>(
    {} as ContactModel
  );

  const onSubmitContainer = (value: ContactModel) => {
    let index = dataList.findIndex((b) => b.id === value.id);
    if (index > -1) {
      dataList[index] = value;
      console.log("data Updated", dataList);
    } else {
      console.log("data add", value);
      const dataListCopy = [...dataList];
      var maxNumber = 100;
      var randomNumber = Math.floor(Math.random() * maxNumber + 1);
      value.id = randomNumber;
      dataListCopy.push(value);
      setDataList(dataListCopy);
      setValue("contact", dataList);
    }
  };
  const deleteContact = (e: { id: number }) => {
    debugger;
    const rows = [...dataList];

    let index = rows.findIndex((a) => a.id === e.id);

    console.log(index);
    rows?.splice(index, 1);
    setDataList(rows);
  };
  const editData = (e: { id: number }) => {
    debugger;
    // if this task has the same ID as the edited task
    let index = dataList.findIndex((b) => b.id === e.id);
    const value = dataList[index];
    setEditContactList(value);
    console.log(editContactList);
    console.log("edit data In Container", value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid">
          <div className="col-12">
            <div className="p-fluid formgrid grid">
              <div className="field col-6">
                <label htmlFor="firstName">First Name*</label>
                <Controller
                  name="firstName"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <InputText
                      id={field.name}
                      type="string"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div className="p-error">
                {errors.firstName && "First name is required"}
              </div>

              <div className="field col-6">
                <label htmlFor="city">City</label>
                <Controller
                  name="city"
                  defaultValue={""}
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      id={field.name}
                      type="string"
                      value={field.value}
                      onChange={field.onChange}
                      options={props.cities}
                    />
                  )}
                />
              </div>
              <div className="field col-6">
                <label htmlFor="organizationname">Organization Name*</label>
                <Controller
                  name="organizationName"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "organizationname is required." }}
                  render={({ field }) => (
                    <InputText value={field.value} onChange={field.onChange} />
                  )}
                />
                <div className="p-error">
                  {errors.organizationName && "First name is required"}
                </div>
              </div>
              <div className="field col-6">
                <label htmlFor="address">Address</label>

                <Controller
                  name="address"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <InputText
                      id={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>
            <Button label="Submit" className="button" />
          </div>
        </div>
      </form>
      <AddContact
        onSubmit={onSubmitContainer}
        editContactList={editContactList}
      />
      <ContactGrid
        list={dataList}
        deleteContact={deleteContact}
        editdata={editData}
      />
    </div>
  );
};

export default AddOrganization;
