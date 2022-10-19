import React, { useCallback, useState } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { Form, Input, Label } from '@pages/SignUp/style';
import { ButtonsContainer, SmallButton } from './style';
import AddRecipeInputGroup from '@components/AddRecipeInputGroup';

import useInput from '@hooks/useInput';
import { db } from '@utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useUserContext } from '@contexts/UserProvider';
import { IStep, IIngredient, IRecipe, IUsedIngredient } from '@typings/db';

type Inputs = {
    sequence: Number;
    steps: IStep[];
};

const Add = () => {
    const { currentUser } = useUserContext();
    const [cuisine, onChangeCuisine] = useInput('');
    const [steps, setSteps] = useState([{}]);

    const onClickAddButton = useCallback(() => {
        setSteps((prev) => [...prev, {}]);
    }, []);

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('check this out');
        e.preventDefault();
        try {
            // const ingredient: IIngredient = {
            //     name: '테스트 재료',
            //     unit: '개',
            // };
            // const used: IUsedIngredient = {
            //     ingredient,
            //     amount: 3,
            // };
            // const step: IStep = {
            //     description: '스텝들',
            //     sequence: 1,
            //     usedIngredients: [used],
            // };
            // const recipe: IRecipe = {
            //     owner: currentUser?.uid ?? 'guest',
            //     cuisine: '테스트 요리',
            //     steps: [step],
            //     ingredients: [ingredient],
            //     isBest: false,
            //     isNew: false,
            // };
            // const docRef = await addDoc(collection(db, 'recipe'), recipe);
            // console.log('success', docRef);
        } catch (error: any) {
            console.dir(error);
        }
    };
    return (
        <DefaultLayout>
            <Form onSubmit={onSubmitForm}>
                <Label>
                    <span>요리명</span>
                    <div>
                        <Input value={cuisine} type="text" onChange={onChangeCuisine} />
                    </div>
                </Label>
                {steps.map((step) => {
                    return <AddRecipeInputGroup />;
                })}
                <ButtonsContainer>
                    <SmallButton type="button" onClick={onClickAddButton}>
                        Add Step
                    </SmallButton>
                    <SmallButton type="submit">Submit</SmallButton>
                </ButtonsContainer>
            </Form>
        </DefaultLayout>
    );
};

export default Add;
