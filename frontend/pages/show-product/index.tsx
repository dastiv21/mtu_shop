import React, { useEffect, useState } from "react";
import { NextPageX } from "@/types/next";
import HRDashboardLayout from "@/src/layouts/hrDashboard";
import { Table, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import Loading from "@/src/component/loading";
import { useStateValue } from "../../src/store/useGlobalState";

interface Get {
  _id: string,
  name: string,
  quantity: number,
  price: number,
  image: string,
}

interface FormValues {
  [key: string]: number; // Assuming the quantity fields have a number type
}

const ShowProduct: NextPageX = () => {
  const form = useForm<FormValues>({
    initialValues: {
      // Initial values for the form
    },
  });




  const [showProducts, setShowProducts] = useState([])
  const [loading, setLoading] = useState(false);
    const { state } = useStateValue()


  const getProducts = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}catalog/getProducts`)
    .then(function (response) {
      setShowProducts(response.data.data)
 
    })
    .catch(function (error) {
      console.log(error);
    });
               
  }



  const addToCart = (productID: string, quantity: number) => {
    console.log(quantity)
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}cart/add`, {productID: productID, quantity: quantity})
    .then(function (response) {
     showNotification({
        message: "Product successfully added to cart",
        color: "green",
      });
    })
    .catch(function (error) {
      console.log(error);
      showNotification({
        title: "Dear user",
        message: error?.response?.data?.error,
        color: "red",
      });
    });
               
  }


  useEffect(() => {
    getProducts()
  }, [])

  const addCart = (productID: string, quantity: number) => {
    addToCart(productID, quantity);
  }



  const deleteProduct = (productID: string) => {
    axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}catalog/deleteProduct/${productID}`)
    .then(function (response) {
      setLoading(true);
     showNotification({
        title: "Dear user",
        message: "Product removed successfully",
        color: "green",
      });
      setLoading(false)
      getProducts();
    })
    .catch(function (error) {
      console.log(error);
      showNotification({
        message: "Product not removed",
        color: "red",
      });
    });
               
  }



  const rows = showProducts.map((element, _id) => (
    <tr key={element['price']}>
      <td>{element['name']}</td>
      <td>{element['price']}</td>
      <td>
        <button>
          <img 
          className="w-20" src={element["image"]} />
        </button>
      </td>
      <td>{
      <div className="flex items-center gap-2">
        {element['quantity']} 
        <TextInput
        type="number"
        classNames={{
          root: "flex flex-col gap-2",
          input: "py-3 pl-4 !h-[30px] border border-solid rounded-xl",
        }}
        placeholder="Quantity"
        value={form.values[`quantity${_id}` as keyof FormValues] || ""}
        onChange={(event) => form.setFieldValue(`quantity${_id}`, Number(event.target.value))}
        />
      </div>
      } </td>
        {!state?.isAdmin &&
        <td>
            <button onClick={() => addCart(element['_id'], form.values[`quantity${_id}`])} className="bg-[#000] text-white px-2 py-1 rounded-md">Buy</button>
        </td>
        }
        {
            state?.isAdmin &&
            <td>
                <button onClick={() => deleteProduct(element['_id'])} className="bg-[#CC553D] flex items-center text-white p-2 rounded-md">Delete</button>
            </td>
        }

    </tr>

  ));

  return ( 
      <article className="flex-1 dark:bg-hrDarkMode-1 overflow-auto flex bg-xds-eneutral-2 p-6 flex-col">
        <Table horizontalSpacing="md" verticalSpacing="md" fontSize="lg">
      <thead>
        <tr className="font-bold text-[12px] leading-5">
          <th>Product Name</th>
          <th>Price</th>
          <th>Picture</th>
          <th>Quantity</th>
            {!state?.isAdmin &&
            <th>Buy Button</th>
            }
            {
                state?.isAdmin &&
                <th>Delete Product</th>
            }

        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    <Loading loading={loading} />
      </article>
  );
};

ShowProduct.Layout = HRDashboardLayout;
ShowProduct.LayoutProps = { pageLabel: [
  {
    label: "Show Product",
    link: "/show-product"
  }
  ] 
};

export default ShowProduct;