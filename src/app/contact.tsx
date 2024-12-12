"use client";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        category: "general",
        message: "",
    });

    const [file, setFile] = useState<File | null>(null);
    const [captcha, setCaptcha] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files ? e.target.files[0] : null;
        setFile(uploadedFile);
    };

    const generateCaptcha = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const [captchaCode] = useState(generateCaptcha());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (captcha !== captchaCode) {
            setCaptchaError(true);
            return;
        }
        setCaptchaError(false);

        const formPayload = {
            ...formData,
            file: file ? file.name : null,
        };
        console.log("Form submitted:", formPayload);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl w-full mx-4 p-8 bg-white rounded-2xl dark:bg-black dark:shadow-dark">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Your phone number"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="general">General Inquiry</option>
                                <option value="support">Support</option>
                                <option value="feedback">Feedback</option>
                                <option value="collaboration">Collaboration</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Your message"
                            rows={4}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="file"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Upload File (Optional)
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="captcha"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Captcha: <span className="font-semibold">{captchaCode}</span>
                        </label>
                        <input
                            type="text"
                            id="captcha"
                            name="captcha"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-50 ${
                                captchaError
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-blue-400"
                            } dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                            placeholder="Enter the captcha code"
                            required
                        />
                        {captchaError && (
                            <p className="text-sm text-red-500 mt-1">
                                Captcha does not match. Please try again.
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-16 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
