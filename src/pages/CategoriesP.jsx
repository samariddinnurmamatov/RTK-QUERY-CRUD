import { useState } from "react";
import CategoryCard from "../components/card/CategoryCard";
import CategorySearchForm from "../components/form/CategorySearchForm";
import { useAddCategoryMutation, useGetCategoriesQuery } from "../redux/query_services/categoryServices"
import ModalForm from "../components/modal/ModalForm";
import CategoryForm from "../components/form/CategoryForm";
import Loading from "../components/Loading/Loading";


const CategoriesP = () => {
  const [ search, setSearch] = useState("");
  const [ show, setShow] = useState(false);
  const [ category ] = useState({name: "", avatar: "", lastName: "", firstName: "", phoneNumber: "", email: "",});
  
  const { data: categories, isLoading, refetch } = useGetCategoriesQuery({search});
  const [ addData ] = useAddCategoryMutation();
  
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

  return (
    <section>
      <div className="containe">
        <CategorySearchForm {...CategorySearchFormProps}/>
        {isLoading ? (
          <Loading />
        ) :(
          <div className="row">
            {categories?.map((category) => (
              <div key={category.id} className="col-md-6 col-lg-4 col-xl-3">
                <CategoryCard {...category}/>
              </div>
            ))}
          </div>
        )}
      </div>
      <ModalForm values={category} show={show} submit={submit} closeModal={closeModal} >
        <CategoryForm />
      </ModalForm>
    </section>
  )
}

export default CategoriesP