import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import {FormStyle, SpanError} from './Form.stld'
import {Input, InputError} from '../Inputs/InputComp'
import {ConteinerInput, DivSearchstld} from '../Inputs/InputComp.styled'
import { useForm } from "react-hook-form";
import { Botao } from "../../components/Botoes/Botao";
import { useState } from "react";
import { useComentario } from "../../contexts/comentarios/useComents";

const validationSchema = yup.object({
    fullName: yup
      .string()
      .min(2, "Mínimo 2 catacteres")
      .required("Campo obrigatório"),
    emaill: yup.string().email("Campo obrigatório"),
    coment: yup.string().required(),
})  

export const Form = () => {
    
    const [coment, setComent] = useState([])
    const {setComentariopost} = useComentario()

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
        coment.push(JSON.parse(pessoaJson))
        console.log(coment);
        localStorage.setItem("coments", JSON.stringify(coment))
        setComentariopost(valores)
    }

    // const pegaComent = () => {
    //     const pegaComent = localStorage.getItem('coments')  
    //     const comentario = JSON.parse(pegaComent)
    //     coment.push(comentario);
    //     console.log(coment);
    
    //  }

    


      return (
        <DivSearchstld>
        <FormStyle onSubmit={handleSubmit(saveComent,  onError)}>
            <Paragraph>Deixe seu comentário!</Paragraph>
            <ConteinerInput>
            <Paragraph>Nome: </Paragraph>
            {errors?.fullName?.type ? (
                <InputError
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
                <InputError
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
                <InputError
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
            <Botao handleClick={handleSubmit(saveComent, onError)}>Postar comentário</Botao>

        </FormStyle>
    </DivSearchstld>


      )

      
}