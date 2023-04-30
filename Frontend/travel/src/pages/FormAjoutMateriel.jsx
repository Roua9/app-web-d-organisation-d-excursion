import { useState, useEffect } from "react"
import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap"
import { BASE_URL } from "../utils/config"
import { useNavigate } from "react-router-dom"

const FormAjoutMateriel = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState("")
  const [desc, setDesc] = useState("")
  const [tel, setTel] = useState("")
  const [nom, setNom] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = { title, photo, desc, tel, nom, price }
    try {
      const res = await fetch(`${BASE_URL}/materiels/addMateriel`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await res.json()
      if (!res.ok) alert(result.message)

      navigate("/materiel")
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    if (photo) {
      console.log("File has been set.")
    }
  }, [photo])

  // const onImageChange = (event) => {
  //   setPhoto(event.target.files[0])
  //   console.log(photo)
  // }

  return (
    <Form className=" col-md-3 container-fluid" onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Titre</Label>
        <Input
          placeholder="Titre de matériel de camp"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormGroup>
      <FormGroup>
        <Label>Nom</Label>
        <Input
          placeholder="Votre nom"
          type="text"
          onChange={(e) => setNom(e.target.value)}
          value={nom}
        />
      </FormGroup>
      <FormGroup>
        <Label>Téléphone</Label>
        <Input
          placeholder="Votre numéro de téléphone"
          type="text"
          onChange={(e) => setTel(e.target.value)}
          value={tel}
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          type="textarea"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </FormGroup>
      <FormGroup>
        <Label>Prix</Label>
        <Input
          type="number"
          placeholder="Prix"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input
          type="file"
          onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
          //value={photo}
        />
      </FormGroup>
      <Button type="submit">Publier</Button>
    </Form>
  )
}
export default FormAjoutMateriel
