import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usersAPI from "../../../../services/userAPI";
import { useForm, isEmail } from '@mantine/form';
import { Button, Select, NativeSelect } from '@mantine/core';
import { PasswordInput, TextInput, Grid, NumberInput, Textarea, Checkbox } from '@mantine/core';
import { FaUpload } from "react-icons/fa";
import { DatePicker, DateRangePicker } from '@mantine/dates';
import { useParams } from "react-router-dom";
import "../../../../App.scss"

const EditUser = () => {
  const { users } = useSelector((state) => state.userSlice);
  const [value, setValue] = useState('');
  const { idToEdit } = useParams(); // Đặt tên đúng với đoạn mã đã sử dụng useParams
  const userToEdit = users.find(user => user.id === idToEdit);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: userToEdit?.name || '',
      password: userToEdit?.password || '',
      phone: userToEdit?.phone || '',
      birthday: userToEdit?.birthday || '',
      gender: userToEdit?.gender.toString() || 'true',
      role: userToEdit?.role.toString() || '',
    },
    validate: (values) => ({
      name: values.name.length < 1 ? 'Tên không để trống' : null,
      email: (/^\S+@\S+$/.test(values.email) ? null : 'Invalid email'),
      password: values.password.length < 1  ? 'Mật khẩu không để trống' : null,
      phone: values.phone.length < 1 ? 'Hình ảnh không để trống' : null,
      birthday: values.birthday.length < 1 ? 'Ngày sinh không để trống' : null,
      gender: values.gender.length < 1 ? 'Giới tính chọn 1 trong 2' : null,
      role: values.role.length < 0 ? 'Phân quyền cho user' : null,  
    }),
  });

  const onSubmit = async (values) => {
    try {
      await usersAPI.editUser(idToEdit, values);
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
    <Grid grow gutter="xs">
      <Grid.Col span={6}>
        <TextInput label="Tên" placeholder="Nhập tên" {...form.getInputProps('name')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea label="email" placeholder="Nhập email" {...form.getInputProps('email')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <PasswordInput label="password" placeholder="Nhập password" {...form.getInputProps('password')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea label="Số điện thoại" placeholder="Nhập số điện thoại" {...form.getInputProps('phone')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <DatePicker placeholder="Ngày Sinh Nhật" label="Ngày Sinh Nhật" withAsterisk {...form.getInputProps('birthday')} />
      </Grid.Col>
      <Grid.Col span={6}>
          <NativeSelect
          label="Giới Tính"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={[{value: true, label: "Trai"}, {value: false, label: "Gái"}]}
          {...form.getInputProps('gender')}
        />
      </Grid.Col>
      <Grid.Col span={6}>
          <NativeSelect
          label="Phân Quyền"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={[{value: true, label: "User"}, {value: false, label: "Admin"}]}
          {...form.getInputProps('role')}
        />
      </Grid.Col>
      
    </Grid>
    <Button type="submit" mt="sm">
      Thêm
    </Button>
    </form>
  )
}

export default EditUser