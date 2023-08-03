import { useState } from "react";
import CategoryCard from "../components/card/CategoryCard";
import CategorySearchForm from "../components/form/CategorySearchForm";
import { useAddCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery } from "../redux/query_services/categoryServices"
import ModalForm from "../components/modal/ModalForm";
import CategoryForm from "../components/form/CategoryForm";
import Loading from "../components/Loading/Loading";
import { Modal, message } from "antd";


const CategoriesP = () => {
  const [ search, setSearch] = useState("");
  const [ show, setShow] = useState(false);
  const [ selectedProductId, setSelectedProductId ] = useState(null);
  const [selectedProductData, setSelectedProductData] = useState(null);
   const [isEditing, setIsEditing] = useState(false);
  const [ category, setCategory ] = useState({name: "", avatar: "", lastName: "", firstName: "", phoneNumber: "", email: "",});
  
  const { data: categories, isLoading, refetch } = useGetCategoriesQuery({search});

  const [ addData ] = useAddCategoryMutation();
  const [ deleteData ] = useDeleteCategoryMutation();
  
  const openModal = () => {
    // setCategory({avatar: "", lastName: "", firstName: "", phoneNumber: "", email: "",})
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }


  const submit = async (values) => {
    await addData(values);
    refetch();
    
  }

  const CategorySearchFormProps = { search, setSearch, openModal };

  const DeleteCategory = async (id) => {
    try {
      Modal.confirm({
        title: "Confirm",
        content: "Do you want to delete this post?",
        okText: "Delete",
        onOk: async () => {
          await deleteData(id);
          message.success("CategoryPost deleted successfully!");
          refetch();
        },
      });
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };


  const handleEditProduct = (id, categoryData) => {
  setSelectedProductId(id);
  setSelectedProductData(categoryData);
  setCategory(categoryData); // Populate the category state for editing
  setIsEditing(true);
  setShow(true); // Open the modal when editing
};


  return (
    <section style={{padding: "10px 20px"}}>
      <div className="containe">
        <CategorySearchForm {...CategorySearchFormProps}/>
        {isLoading ? (
          <Loading />
        ) :(
          <div className="row">
            {categories?.map((category) => (
              <div key={category.id} className="col-md-6 col-lg-4 col-xl-3">
                <CategoryCard {...category} delet={() => DeleteCategory(category?.id)} edit={() => handleEditProduct(category?.id, category)} />
              </div>
            ))}
          </div>
        )}
      </div>
      <ModalForm key={selectedProductId} values={category} show={show} submit={submit} closeModal={closeModal} >
        <CategoryForm />
      </ModalForm>
    </section>
  )
}

export default CategoriesP