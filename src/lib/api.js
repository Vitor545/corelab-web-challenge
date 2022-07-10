import axios from 'axios';

const API = "http://localhost:3001";

export const createUsers = async (name, email, password) => {
  let result;

   await axios.post(`${API}/user/register`, {
    name,
    email,
    password
  })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const loginUsers = async (email, password) => {
let result;

  await axios.post(`${API}/login`, {
   email,
   password
 })
 .then((response) => {
  result = response.data;
 })
 .catch((error) => {
   result = error.response.data.message;

 });

 return result;
};

export const createAnnotation = async (name, brand, color, board, year, description, priceMin, priceMax, userId, token) => {
  let result;

   await axios.post(`${API}/announcement`, {
    name,
    brand,
    color,
    board,
    year,
    description,
    priceMin, 
    priceMax, 
    userId
  }, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const updateAnnotation = async (name, brand, color, board, year, description, priceMin, priceMax, userId, token, annotationId) => {
  let result;

   await axios.put(`${API}/announcement/${annotationId}`, {
    name,
    brand,
    color,
    board,
    year,
    description,
    priceMin, 
    priceMax, 
    userId
  }, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const getAllAnnotation = async (token) => {
  let result;

   await axios.get(`${API}/announcement`, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {

   result = error.response.data.message;
  });

 return result;

};

export const getInfoUserapi = async (userId, token) => {
  let result;

   await axios.get(`${API}/user/${userId}`, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {

   result = error.response.data.message;
  });

 return result;

};

export const getOneAnnotation = async (id, token) => {
  let result;

   await axios.get(`${API}/announcement/${id}`, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {

   result = error.response.data.message;
  });

 return result;

};

export const deleteAnnotation = async (userId, token, annotationId) => {
  let result;

  await axios.delete(`${API}/announcement/${annotationId}`, {
    headers: {
      'authorization': `${token}` 
    },
    data: {
      userId
    }
  })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const createFavorite = async (userId, announcementId, token) => {
  let result;

   await axios.post(`${API}/favorites`, {
    userId,
    announcementId
  }, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const deleteFavorite = async (userId, announcementId, token) => {
  let result;

  await axios.delete(`${API}/favorites/${announcementId}`, {
    headers: {
      'authorization': `${token}` 
    },
    data: {
      userId
    }
  })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const getAllFavorites = async (userId, token) => {
  let result;

   await axios.get(`${API}/favorites/${userId}`, {
    headers: {
      'authorization': `${token}` 
    }
   })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {

   result = error.response.data.message;
  });

 return result;

};