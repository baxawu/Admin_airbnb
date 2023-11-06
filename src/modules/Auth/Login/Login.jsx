import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../services/Slices/authSlice";
import { Navigate } from "react-router-dom";
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from '@mantine/core';


const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authSlice);
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Không đúng định dạng email'),
      password: (val) => (val.length <= 1 ? 'Mật khẩu không được trống' : null),
    },
  });

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  if(user){
    return <Navigate to="/admin" />
  }

  return (
    <Paper radius="md" p="xl">
      <Text size="lg" weight={500}>
        Chào mừng đến với trang Admin
      </Text>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          
          <TextInput
            required
            label="Email"
            placeholder="abc@gmail.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Mật khẩu"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
          />

          
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default Login;
