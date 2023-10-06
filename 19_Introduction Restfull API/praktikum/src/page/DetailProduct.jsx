import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function DetailProduct() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">asdasd</div>
      <div className="card-body">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Id</td>
            </tr>
            <tr>
              <td>Product Name</td>
            </tr>
            <tr>
              <td>Product Category</td>
            </tr>
            <tr>
              <td>Product Freshness</td>
            </tr>
            <tr>
              <td>Product Price</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer text-body-secondary">
        <Button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => navigate(-1)}
        >
          asdasd
        </Button>
      </div>
    </div>
  );
}

export default DetailProduct;
