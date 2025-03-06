import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  project: string;
  client: string;
  location: string;
  description: string;
  buildingType: string;
  files: File[];
}

const BodyAdmin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    project: "",
    client: "",
    location: "",
    description: "",
    buildingType: "",
    files: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (formData.files.length + selectedFiles.length > 5) {
        toast.error("You can only upload a maximum of 5 images.");
        return;
      }
      setFormData({ ...formData, files: [...formData.files, ...selectedFiles] });
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      files: formData.files.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.files.length < 1) {
      toast.error("Please upload at least one image.");
      return;
    }
    toast.success("Form Submitted Successfully!");
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg sm:w-11/12 md:w-3/4 lg:w-1/2">
        <h2 className="text-xl font-bold mb-4 text-center">Upload New Project</h2>
        
        <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 mb-4 border rounded"
          />
        
        <div className="mb-4">
          {formData.files.map((file, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2">
              <span className="text-sm text-gray-700">{file.name}</span>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          name="project"
          placeholder="Title"
          value={formData.project}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        
        <input
          type="text"
          name="client"
          placeholder="Client"
          value={formData.client}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="buildingType"
          placeholder="Building"
          value={formData.buildingType}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Image Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        
        
        
        <button type="submit" className="w-full bg-[--bg-color] text-white py-2 rounded ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BodyAdmin;
