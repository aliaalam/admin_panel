import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTile">New Product</h1>
      <div className="newProductUpload">
        <label htmlFor="">Image</label>
        <input type="file" id="file" />
      </div>
      <form action="" className="newProductForm">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Apple Airpod" />

        <label htmlFor="">Stock</label>
        <input type="number" placeholder="123" />

        <label htmlFor="">Active</label>
        <select name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
      <button className="newProductutton">Create</button>
    </div>
  );
}
