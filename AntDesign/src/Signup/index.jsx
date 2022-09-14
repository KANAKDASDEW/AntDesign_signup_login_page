import React, { useState, useEffect } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { signUpUser} from "../redux/reducers/userSlice"
import { Button, Checkbox, Form, Input, Select, message ,Tag,
  
  Switch,
  TreeSelect,} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_KEY_TOKEN, LOCAL_STORAGE_KEY_USER  } from "../const/const";
import ImageUpload from "../common/ImageUpload";
import './signup.css';

import { Link } from "react-router-dom";
const { Option } = Select;

let api_url = process.env.REACT_APP_DEV_API_URL;
if (process.env.NODE_ENV === "production") {
  api_url = process.env.REACT_APP_PROD_API_URL;
}
const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [img, setImg] = useState("");

  const [form] = Form.useForm();
  const {
    registerUser,
    getUser: { loading, success, error, user, token },
  } = useSelector((state) => state.userReducer);

  const onSubmit = (values) => {
    if (!img) {
      message.error("please upload profile image ");
    }
    const data = { ...values, img };
    dispatch(signUpUser(data));
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(user));
      localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token);

      history.push("/home");
    }
  }, [user]);

  const handleUpload = (v) => {
    setImg(v.response[0]);
  };

  return (
    <>
      <section className="signup">
      <div   style={{marginRight: 120}} class="container  mt-5 ">
        <div class="row ">
          <div class="col-md-8 offset-md-3 card  p-5 ">
            <Form 
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
            
              autoComplete="off"
            >
              

              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your valid email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Please input your city!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

           

              <Form.Item name="role" label="I am a " hasFeedback rules={[{ required: true, message: "Please  selete one !" }]}>
                <Select placeholder="Please select a country">
                  <Option value="buyer">Buyer</Option>
                  <Option value="seller">Seller</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

             

             
              <Link to="log_in">
                <Tag color="#2db7f5">Back to Log In </Tag>
              </Link>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Form.Item  name="img" label="">
                <ImageUpload handleUpload={handleUpload} />
              </Form.Item>
                <Button loading={registerUser.loading} disabled={registerUser.loading} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      </section>
      
    </>
  );
};
export default Signup;
