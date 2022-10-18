import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import {FormStyle, SpanError} from './Form.stld'
import {Input, InputError} from '../Inputs/InputComp'
import {ConteinerInput} from '../Inputs/InputComp.styled'
import { useForm } from "react-hook-form";
import { Botao } from "../../components/Botoes/Botao";
import {pegaComent} from '../../pages/detalhes/detalhes'
import { useState } from "react";

const validationSchema = yup.object({
    fullName: yup
      .string()
      .min(2, "Mínimo 2 catacteres")
      .required("Campo obrigatório"),
    emaill: yup.string().email("Campo obrigatório"),
    coment: yup.string().required(),
})  

export const Form = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        setFocus,
      } = useForm({ resolver: yupResolver(validationSchema) });
    
      function onError(erro) {
        console.log("erro: ", erro);
      }

    
 
    
    const saveComent = (valores) => {
        const pessoa = {'nome': valores.fullName, 'coment': valores.coment};
        const pessoaJson = JSON.stringify(pessoa);
        localStorage.setItem("pessoa", pessoaJson)
        
    }

    


      return (
        <div>
        <FormStyle onSubmit={handleSubmit(saveComent, pegaComent, onError)}>
            <ConteinerInput>
            <Paragraph>Nome: </Paragraph>
            {errors?.fullName?.type ? (
                <InputErrorStyled
                {...register("fullName", { required: true })}
                placeholder="Seu nome aqui"
                id={"nome"}
                />
            ) : (
                <Input
                {...register("fullName", { required: true })}
                placeholder="Digite seu nome"
                id={"nome"}
                />
            )}

            <SpanError>{errors?.fullName?.message}</SpanError>
            </ConteinerInput>

            <ConteinerInput>
            <Paragraph>E-mail:</Paragraph>
            {errors?.email?.type ? (
                <InputErrorStyled
                {...register("email", { required: true })}
                placeholder="exemplo@exemplo.com"
                id={"email"}
                />
            ) : (
                <Input
                {...register("email", { required: true })}
                placeholder="Digite seu e-mail"
                id={"email"}
                />
            )}

            <SpanError>{errors?.email?.message}</SpanError>
            </ConteinerInput>

            <ConteinerInput>
            <Paragraph>Comentário:</Paragraph>
            {errors?.coment?.type ? (
                <InputErrorStyled
                {...register("coment", { required: true })}
                placeholder="deixe seu comentário!"
                id={"coment"}
                />
            ) : (
                <Input
                {...register("coment", { required: true })}
                placeholder="deixe seu comentário!"
                id={"coment"}
                />
            )}

            <SpanError>{errors?.email?.message}</SpanError>
            </ConteinerInput>
            <Botao handleClick={handleSubmit(saveComent, pegaComent, onError)}>Postar comentário</Botao>

        </FormStyle>
    </div>


      )

      
}