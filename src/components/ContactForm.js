// import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import emailjs from "emailjs-com";


const ContactForm = () => {
    const [form] = Form.useForm();

    const sendEmail = (values) => {
        emailjs
          .send(
            "service_txfma12",     
            "template_nb3evcm",
            {
              from_name: values.name,
              from_email: values.email,
              message: values.message,
            },
            "L6h8KJdJgPjYLTGm7"        
          )
          .then(
            (result) => {
              alert("Message envoyé avec succèss");
              form.resetFields();

            },
            (error) => {
              alert("Une erreur est survenue  " + error.text);
            }
          );
      };


    return (
      <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-gray-800 text-left mb-4">
          Contactez-moi
        </h2>
        <p className="text-lg text-gray-600  max-w-3xl leading-relaxed">Vous avez un projet en tête ? Je serais ravie de discuter avec vous <br/>et de voir comment nous pouvons collaborer pour le concrétiser.</p>
        <div className="grid md:grid-cols-2 gap-16">
        <div className=" py-8">
        <Form layout="vertical" onFinish={sendEmail} className="space-y-6">
      <Form.Item
        name="name"
        label={<span className="text-gray-700 font-medium">Nom</span>}
        rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
      >
        <Input
          size="large"
          className="rounded-xl border-2 border-gray-100 hover:border-pink-200 focus:border-pink-300 transition-colors duration-300 shadow-sm"
          placeholder="Votre nom complet"
        />
      </Form.Item>

      <Form.Item
        name="email"
        label={<span className="text-gray-700 font-medium">Email</span>}
        rules={[{ required: true, type: "email", message: "Email invalide" }]}
      >
        <Input
          size="large"
          type="email"
          className="rounded-xl border-2 border-gray-100 hover:border-pink-200 focus:border-pink-300 transition-colors duration-300 shadow-sm"
          placeholder="votre@email.com"
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={<span className="text-gray-700 font-medium">Message</span>}
        rules={[{ required: true, message: "Veuillez écrire un message" }]}
      >
        <Input.TextArea
          rows={4}
          className="rounded-xl border-2 border-gray-100 hover:border-pink-200 focus:border-pink-300 transition-colors duration-300 shadow-sm resize-none"
          placeholder="Décrivez votre projet ou votre demande..."
        />
      </Form.Item>

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        className="!rounded-button whitespace-nowrap cursor-pointer bg-[#ec4899] hover:bg-[#e62a1a] border-[#ec4899] hover:border-[#e62a1a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Envoyer
      </Button>
    </Form>
 
          </div>
          {/* <div className="space-y-8 py-8">
          <Form layout="vertical" className="space-y-6">
       
              <Form.Item
                label={
                  <span className="text-gray-700 font-medium">Sujet</span>
                }
                className="mb-4"
              >
                <Input
                  size="large"
                  className="rounded-xl border-2 border-gray-100 hover:border-pink-200 focus:border-pink-300 transition-colors duration-300 shadow-sm"
                  placeholder="Sujet de votre message"
                />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-gray-700 font-medium">Message</span>
                }
                className="mb-6"
              >
                <Input.TextArea
                  rows={4}
                  className="rounded-xl border-2 border-gray-100 hover:border-pink-200 focus:border-pink-300 transition-colors duration-300 shadow-sm resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </Form.Item>
              </Form>
          </div> */}
            <div className="space-y-6 py-6">
              <div className="transform hover:scale-105 transition-transform duration-300 pt-8">
                <div className="flex items-center space-x-6 bg-[#fef9fb] p-6 rounded-2xl">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <MailOutlined className="text-[#ec4899] text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-[#ec4899]">dialllohali2017@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-6 bg-[#fef9fb] p-6 rounded-2xl">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <PhoneOutlined className="text-[#ec4899] text-2xl" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <p className="text-[#ec4899]">+221 78 139 22 17 </p>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
     
      {/* Back to top button */}
      
      </div>
    </section>

);
};

export default ContactForm;