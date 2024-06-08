export const getDocumentTypes=()=>{
  fetch("http://192.168.100.227:8080/inventarios-1.0.0/rest/tiposdocumento/recuperar")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
}

export const createDocTipoService = (post, fnExito) => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      codigo: post.title,
      descripcion: post.body,
    }),
   
    headers: {
      "Content-Type": "application/json",
    },
  };


  fetch("http://192.168.100.227:8080/inventarios-1.0.0/rest/tiposdocumento/crear", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      fnExito();
    }).catch((error) => {
      //console.error('Hubo un error!', error);
     
    });

};

export const getAllPostsService = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const createPostService = (post, fnExito) => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: 1,
    }),
   
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      fnExito();
    });
};

export const updatePostService = () => {
  const config = {
    method: "PUT",
    body: JSON.stringify({
      id: 101,
      title: "mensaje",
      body: "buena suerte en su evaluacion",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/posts/1", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const getByUserIdService = () => {
  const config = {
    method: "GET",
    // body: JSON.stringify({
    //    id:"",
    //    title:'',
    //   body:'',
    //   userId:"",
    // }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const getXxServicio = () => {
  const config = {
    method: "GET",
    // body: JSON.stringify({
    //   categories: ["animal"],
    //   created_at: "2020-01-05 13:42:20.262289",
    //   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    //   id: "SYTaGU6KTGyMOlILzVWG_A",
    //   updated_at: "2020-01-05 13:42:20.262289",
    //   url: "https://api.chucknorris.io/jokes/SYTaGU6KTGyMOlILzVWG_A",
    //   value: "Estoy insertando chuck."

    // }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://api.chucknorris.io/jokes/random", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};
export const postYyyService = () => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "Celular Redmin",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://fakestoreapi.com/products", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export const updateZzzService = () => {
  const config = {
    method: "PUT",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "Cargador Redmi",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://fakestoreapi.com/products/7", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};
