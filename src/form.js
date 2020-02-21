import React from "react";

const Form = props => {
  const { author, text, img, submitHandler, changeHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      <input
        id="author"
        onChange={changeHandler}
        value={author}
        placeholder="Ingrese author"
      />
      <input
        id="text"
        onChange={changeHandler}
        value={text}
        placeholder="¿Que estas pensando?"
      />
      <input
        id="img"
        onChange={changeHandler}
        value={img}
        placeholder="Ingresa link img"
      />
      <button type="submit">
        Guardar Post
      </button>
    </form>
  );
};

export default Form;