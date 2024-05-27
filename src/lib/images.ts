// // Import required modules using ES6 import syntax
// import { promises as fs } from 'fs';
// import path from 'path';
// import { v2 as cloudinary } from 'cloudinary';

// // import { cloudinary } from '@/lib/utils';  

// cloudinary.config({
//     cloud_name: 'dly6v8ee5', // Replace with your actual cloud name
//     api_key: '194498543141667',       // Replace with your actual API key
//     api_secret: 't0gvLtCukGm_BjUegLblLzVkJ4I', // Replace with your actual API secret
//     secure: true                   // Use HTTPS for secure connections
// });

// // export { cloudinary };
// // Directory containing the images
// const IMAGES_DIR = './public/images/products';

// // Define an interface for the result of the upload process
// interface UploadResult {
//     originalName: string;
//     url: string;
// }

// // Asynchronous function to upload images
// async function uploadImages(directory: string): Promise<UploadResult[]> {
//     try {
//         // Read all files in the directory
//         const files = await fs.readdir(directory);
//         // Map each file to an upload promise
//         const uploadPromises = files.map(file => {
//             const filePath = path.join(directory, file);
//             return cloudinary.uploader.upload(filePath, {
//                 folder: "bulk_images"
//             }).then(result => ({
//                 originalName: file,
//                 url: result.url
//             }));
//         });

//         // Await all upload promises to resolve
//         const results = await Promise.all(uploadPromises);
//         return results;
//     } catch (err) {
//         console.error('Failed to upload images:', err);
//         throw err;
//     }
// }

// // Execute the uploadImages function and handle results
// uploadImages(IMAGES_DIR)
//     .then(results => {
//         console.log('Uploaded images and their URLs:', results);
//         // Optionally save the results to a database or a JSON file
//         fs.writeFile('imageURLs.json', JSON.stringify(results, null, 2), { encoding: "utf8" });
//     })
//     .catch(err => {
//         console.error('Error in uploading:', err);
//     });
