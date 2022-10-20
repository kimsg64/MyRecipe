import React, { useCallback, useState } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { Form, Input, Label } from '@pages/SignUp/style';
import { ButtonsContainer, FileInput, SmallButton, TempContainer, TextArea } from './style';

import useInput from '@hooks/useInput';
import { db } from '@utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useUserContext } from '@contexts/UserProvider';
import { IStep, IRecipe } from '@typings/db';

const Add = () => {
    const { currentUser } = useUserContext();
    const [cuisine, onChangeCuisine] = useInput('');
    const [steps, setSteps] = useState<IStep[]>([{ sequence: 1 }]);
    const [description, onChangeDescription, setDescription] = useInput('');

    const onClickAddButton = useCallback(() => {
        if (description) {
            setSteps((prev) =>
                [...prev, { sequence: prev[prev.length - 1].sequence++, description }].sort(
                    (a, b) => a.sequence - b.sequence,
                ),
            );
            setDescription('');
        }
    }, [description, setDescription]);

    const onSubmitForm = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!cuisine || !steps) return;
            try {
                const recipe: IRecipe = {
                    owner: currentUser?.uid ?? 'guest',
                    cuisine,
                    steps: steps.slice(0, -1),
                    ingredients: [{ name: 'hell', unit: 'point' }],
                    isBest: false,
                    isNew: false,
                };
                const docRef = await addDoc(collection(db, 'recipe'), recipe);
                console.log('success', docRef);
            } catch (error: any) {
                console.dir(error);
            }
        },
        [cuisine, steps, currentUser],
    );
    return (
        <DefaultLayout>
            <Form onSubmit={onSubmitForm}>
                <Label>
                    <span>요리명</span>
                    <div>
                        <Input value={cuisine} type="text" onChange={onChangeCuisine} />
                    </div>
                </Label>

                {/* step 임시 저장 => 클릭 시 불러와서 수정 */}
                <TempContainer>
                    {steps &&
                        steps.map((step) => {
                            return <div key={step.sequence}>{step.description}</div>;
                        })}
                </TempContainer>
                {/* step 임시 저장 => 클릭 시 불러와서 수정 */}

                <Label>
                    <span>description</span>
                    <div>
                        <TextArea value={description} onChange={onChangeDescription}></TextArea>
                    </div>
                </Label>
                <Label>
                    <span>input file</span>
                    <div>
                        <FileInput type="file" />
                    </div>
                </Label>

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
