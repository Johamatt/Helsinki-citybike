export const validAdress = (adress: any) => {

    if (typeof adress === 'string') {
        if (adress.length < 200) {
            return true;
          } else {
            return false;
          }
    }

    return true;



};
