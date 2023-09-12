import InputField from "../components/InputField";
import SelectInput from "../components/SelectInput";
import RadioInput from "../components/RadioInput";
import TextArea from "../components/TextArea";
import WrapInputField from "../components/WrapInputField";
import Button from "../components/Button";

function Form() {
  return (
    <div className="container w-50">
      <form action="" className="row needs-validation" noValidate>
        <div className="container">
          <div className="row p-3">
            <h3 className="mb-3">Detail Product</h3>
            <InputField label="Product Name" type="text"></InputField>
            <div className="row">
              <SelectInput
                label="Product Category"
                value1="Food"
                value2="Clothing"
                value3="Else"
              ></SelectInput>
            </div>
            <InputField label="Image of Product" type="file"></InputField>
            <div className="row">
              <RadioInput
                label="Product Freshness"
                value1="Brand New"
                value2="Second Hand"
                value3="Refurbished"
              ></RadioInput>
            </div>

            <TextArea label="Additional Description"></TextArea>
            <WrapInputField
              label="Product Price"
              type="number"
              span="$"
            ></WrapInputField>
            <Button
              label="Create Product"
              style={{
                backgroundColor: "#bd4141",
                border: "none",
                color: "white",
              }}
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
