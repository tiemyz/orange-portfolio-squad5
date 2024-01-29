// firebaseStorage.js
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
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

  try {
    console.log('Iniciando upload do arquivo:', file.name);

    // Realize o upload do arquivo
    await uploadBytes(storageRef, file);

    console.log('Upload concluído com sucesso!');

    // Obtenha a URL de download do arquivo
    const downloadURL = await getDownloadURL(storageRef);

    console.log('URL de download do arquivo:', downloadURL);

    return downloadURL;
  } catch (error) {
    console.error('Erro durante o upload do arquivo:', error);
    throw error; // Rejoga o erro para que possa ser capturado pelo código chamador
  }
};

/**
 * Obtém a URL de download de uma imagem no Firebase Storage.
 * @param {string} imagePath - O caminho da imagem no Storage.
 * @returns {Promise<string>} - A URL de download da imagem.
 */
const getImageURL = async (imagePath) => {
  const storageRef = ref(storage, imagePath);
  return await getDownloadURL(storageRef);
};

/**
 * Exclui uma imagem do Firebase Storage.
 * @param {string} imagePath - O caminho da imagem no Storage.
 * @returns {Promise<void>}
 */
const deleteImage = async (imagePath) => {
  const storageRef = ref(storage, imagePath);
  await deleteObject(storageRef);
};

export { uploadImage, getImageURL, deleteImage };