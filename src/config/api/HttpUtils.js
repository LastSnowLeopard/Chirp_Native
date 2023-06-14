const BASE_URL = 'http://13.50.151.52/chrip/api/'; // live url
export const IMAGEBASEURL = 'http://13.50.151.52/chrip/';

export const doHttpGet = endPoint => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
  return result;
};

export const doHttpMultipartWithOutAuth = (data, endPoint) => {
  var requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpPost = (data, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const getToken = () => {
  return localStorage.get('TOKEN');
};

export const doHttpAuth = (params, endPoint, callback) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(params);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpWithAuth = (params, token, endPoint, callback) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);
  var raw = JSON.stringify(params);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpWithPost = (params, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(params);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpGetAfterLogin = (token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpMultipart = (params, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'multipart/form-data');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: params,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpPatchWithoutMultipart = (params, token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');
  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: params,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpPostWithoutMultpart = (params, token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: params,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpMultipartWithoutdata = (token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  // myHeaders.append('Content-Type', 'multipart/form-data');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpDelete = (data, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
    body: data,
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpPostWithId = (token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };

  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};

export const doHttpPutWithoutMultipart = (params, token, endPoint) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/json');
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: params,
    redirect: 'follow',
  };
  const result = fetch(BASE_URL + endPoint, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
  return result;
};
