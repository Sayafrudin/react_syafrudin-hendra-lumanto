const form = document.getElementById("form");
const productname = document.getElementById("product-name");
const productcategory = document.getElementById("product-category");
const imageproduct = document.getElementById("image-product");
const description = document.getElementById("description");
const productprice = document.getElementById("product-price");

//* Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//* Show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

//* Product name REGEX
// const isValidEmail = (productname) => {
//   const re = /^[A-Za-z ]{3,25}$/;
//   return re.test(String(productname));
// };

//* Product price REGEX
const productpriceRegex = (productprice) => {
  const re = /^[0-9]{3,11}$/;
  return re.test(String(productprice));
};

const productnameValue = productname.value;
const productpriceValue = productprice.value;

function stoppedTyping() {
  if (productnameValue === "" || productpriceValue === "") {
    document.getElementById("create").disabled = false;
  } else {
    document.getElementById("create").disabled = true;
  }
}

const validateInputs = () => {
  const productnameValue = productname.value;
  const productcategoryValue =
    productcategory.options[productcategory.selectedIndex].value;
  const imageproductValue = imageproduct.value;
  const radios = document.querySelector('input[name="freshness"]:checked');
  const descriptionValue = description.value;
  const productpriceValue = productprice.value;

  if (productnameValue === "") {
    showError(productname, "Please enter a valid Prouct name.");
    document.getElementById("create").disabled = true;
  } else if (productnameValue.length > 25) {
    showError(productname, "Product Name must not exceed 25 characters.");
  } else if (
    productnameValue.includes("@") ||
    productnameValue.includes("/") ||
    productnameValue.includes("#") ||
    productnameValue.includes("{") ||
    productnameValue.includes("}")
  ) {
    showError(productname, "Name must not contain symbols.");
  } else {
    showSuccess(productname);
  }

  if (productcategoryValue == 0) {
    showError(productcategory, "The Category field must be selected.");
  } else {
    showSuccess(productcategory);
  }

  if (radios) {
    radiosValue = document.querySelector(
      'input[name="freshness"]:checked'
    ).value;
  } else {
    alert("Please select an option first.");
  }

  if (imageproductValue === "") {
    showError(imageproduct, "The Image field must be selected.");
  } else {
    showSuccess(imageproduct);
  }

  if (productpriceValue === "") {
    showError(productprice, "The Price field must be selected.");
  } else if (!productpriceRegex(productpriceValue)) {
    showError(
      productprice,
      "Price only accept number format & not exceed 11 number."
    );
  } else {
    showSuccess(productprice);
  }

  alert(
    "Product name : " +
      productnameValue +
      "\n" +
      "Product category : " +
      productcategoryValue +
      "\n" +
      "Product freshness : " +
      radiosValue +
      "\n" +
      "Product image : " +
      imageproductValue +
      "\n" +
      "Product Description : " +
      descriptionValue +
      "\n" +
      "Product price : " +
      productpriceValue
  );
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
  document.getElementById("form").reset();
});
