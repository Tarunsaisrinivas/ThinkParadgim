import { Form, Input, Button, message } from "antd";


const { TextArea } = Input;

export default function ContactUs() {
  const [messageApi, contextHolder] = message.useMessage(); 

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        messageApi.open({
          type: "success",
          content: "This message has been sent successfully!",
        });
        form.resetFields(); 
        console.log("Successfully submitted message");
      } else {
        const data = await response.json();
        messageApi.open({
          type: 'error',
          content: 'Error occurred',
        });
        console.log("Message Error:", data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white h-full w-full relative z-0" id="contactForm">
      {contextHolder}
      <div className="mx-auto py-12 px-4 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white h-full w-full p-8 shadow-md rounded-lg">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">Contact Us</h2>
            <p className="text-lg text-gray-500">Have some big idea or brand to develop and need help?</p>

            {/* <div className="space-y-2">
              <h3 className="text-lg font-semibold">Address:</h3>
              <p>11 West Town</p>
              <p>PBo 12345, United States</p>
            </div> */}

            <div className="space-y-2">
              {/* <h3 className="text-lg font-semibold">Phone:</h3> */}
              {/* <p>+1 1234 56 789</p> */}
              <p>Let&apos;s bring your ideas to life! Whether you&apos;re looking for expert development, innovative AI solutions, or a boost in your online presence, we&apos;re here to help. Share your requirements, and our team will provide tailored solutions to meet your goals</p>
              {/* <p>+1 1234 56 780</p> */}
            </div>

            <div className="space-y-2">
              {/* <h3 className="text-lg font-semibold">Email:</h3> */}
              {/* <p>info@example.com</p> */}
              {/* <p>email@example.com</p> */}
              <q><cite><b>Success is built on connections. Let&apos;s connect and create something extraordinary together.</b></cite></q>
            </div>
          </div>

          
          <div>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  placeholder="Your Name"
                  className="px-4 py-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "The input is not a valid email!" },
                ]}
              >
                <Input
                  placeholder="Your Email"
                  className="px-4 py-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item name="subject" label="Subject">
                <Input
                  placeholder="Subject"
                  className="px-4 py-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Write Your Message"
                  className="px-4 py-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
