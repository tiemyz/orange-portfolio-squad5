// firebaseStorage.js

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";

// Obtenha uma instância do serviço Storage
const storage = getStorage(app);

/**
 * Faz o upload de uma imagem para o Firebase Storage.
 * @param {File} file - O arquivo de imagem a ser enviado.
 * @param {string} folderName - O nome da pasta no Storage.
 * @returns {Promise<string>} - A URL de download da imagem.
 */
const uploadImage = async (file, folderName) => {
  // Crie uma referência para o arquivo no Storage
  const storageRef = ref(storage, `${folderName}/${file.name}`);

  // Realize o upload do arquivo
  await uploadBytes(storageRef, file);

  // Obtenha a URL de download do arquivo
  const downloadURL = await getDownloadURL(storageRef);

  return downloadURL;
};

export { uploadImage };