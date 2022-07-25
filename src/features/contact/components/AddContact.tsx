import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import { InputTextarea } from "primereact/inputtextarea";
import { ContactModel } from "../model/ConatctModel";
import { useEffect } from "react";

interface IAddContactProps {
  onSubmit: (value: ContactModel) => void;
  editContactList:ContactModel
}
const AddContact: React.FC<IAddContactProps> = (props) => {
  const { control, handleSubmit, reset } = useForm<ContactModel>();
  useEffect(() => {
    console.log("edit data", props.editContactList);
    reset(props.editContactList);
  }, [props.editContactList,reset]);

  const submitContact: SubmitHandler<ContactModel> = (data: ContactModel) => {
    debugger;
    console.log("aaa", data);
    props.onSubmit(data);
    reset({
      address: "",
      name: "",
      id: 0,
      purpose: "",
      telecom: "",
    } as ContactModel);
  };
  return (
    <div className="grid">
      <h3>Contact</h3>
      <form onSubmit={handleSubmit(submitContact)}>
        
          <div className="col-12">
            <div className="p-fluid formgrid grid">
              <div className="field col-3">
                <label htmlFor="name">Name</label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => <InputText {...field} />}
                />
              </div>
              <div className="field col-2">
                <label htmlFor="purpose">Purpose</label>
                <Controller
                  name="purpose"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => <InputText {...field} />}
                />
              </div>
              <div className="field col-3">
                <label htmlFor="organization">Organization*</label>
                <Controller
                  name="telecom"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <InputText value={field.value} onChange={field.onChange} />
                  )}
                />
              </div>
              <div className="field col-3">
                <label htmlFor="addressperson">Person Address</label>

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
              <div className="feild col-1 "> 
              <Button label="Save"/>
                 </div>
            </div>
          </div>
      </form>
    </div>
  );
};

export default AddContact;
