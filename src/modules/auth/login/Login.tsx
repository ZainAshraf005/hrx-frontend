"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values: LoginFormValues) => {
    setLoading(true);

    // Store dummy token in localStorage
    const dummyToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.dummytoken";
    localStorage.setItem("authToken", dummyToken);

    // Store user info if remember is checked
    if (values.remember) {
      localStorage.setItem("userEmail", values.email);
    }

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      // Navigate to organization route
      // router.push("/orgnization");
      // router.push("/admin");
      router.push("/employee");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md px-8 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        className="space-y-4"
      >
        <Form.Item
          label={<span className="text-gray-700 font-medium">Email</span>}
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="Enter your email"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-gray-700 font-medium">Password</span>}
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-400" />}
            placeholder="Enter your password"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="mb-4">
          <div className="flex items-center justify-between">
            <Checkbox className="text-gray-600">Remember me</Checkbox>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
              Forgot password?
            </a>
          </div>
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 border-0 rounded-lg h-12 text-base font-medium"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/auth/signup"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
