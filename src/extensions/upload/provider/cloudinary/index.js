// src/extensions/upload/providers/cloudinary-folder.js

import { utils } from "@strapi/utils";
import cloudinary from "cloudinary";

const { sanitize } = utils;

export default {
  init(config) {
    cloudinary.v2.config(config.cloudinary);

    return {
      async upload(file) {
        try {
          const folderPath = this.generateFolderPath(file);

          const result = await cloudinary.v2.uploader.upload(file.path, {
            folder: folderPath,
            public_id: file.hash,
            overwrite: true,
            resource_type: "auto",
            ...config.uploadOptions,
          });

          return {
            ...file,
            url: result.secure_url,
            provider_metadata: {
              public_id: result.public_id,
              folder: folderPath,
              version: result.version,
            },
          };
        } catch (error) {
          throw new Error(`Cloudinary upload error: ${error.message}`);
        }
      },

      async delete(file) {
        try {
          return await cloudinary.v2.uploader.destroy(
            file.provider_metadata.public_id
          );
        } catch (error) {
          throw new Error(`Cloudinary delete error: ${error.message}`);
        }
      },

      generateFolderPath(file) {
        const { model } = file;
        const now = new Date();

        return [
          config.baseFolder || "strapi",
          process.env.NODE_ENV,
          ...(model ? [model.split("::")[1]] : []),
          now.getFullYear(),
          String(now.getMonth() + 1).padStart(2, "0"),
          file.id || "general",
        ]
          .filter(Boolean)
          .join("/");
      },
    };
  },
};
