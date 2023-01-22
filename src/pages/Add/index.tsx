import React, { useCallback, useRef, useState } from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { Input, Label } from '@pages/SignUp/style';
import {
    ButtonsContainer,
    CustomSwiper,
    CustomSwiperSlide,
    LabelsGroup,
    ListItem,
    ListWrapper,
    SildeTitle,
    SlideBackground,
    SlideDescription,
    SmallButton,
    TextArea,
    WideForm,
} from './style';

import useInput from '@hooks/useInput';
import { db } from '@utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useUserContext } from '@contexts/UserProvider';
import { IStep, IRecipe, IUsedIngredient } from '@typings/db';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FileUploader from '@components/FileUploader';

const GUEST = 'GUEST';
const getRandomColors = () => {
    const COLOR_STEP = 30;
    const candidates = new Array(360 / COLOR_STEP).fill(0).map((v, i) => `${COLOR_STEP * (i + 1)}`);
    const shuffled: string[] = [];
    while (candidates.length > 0) {
        shuffled.push(candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0]);
    }
    // console.log('shuffled', shuffled);
    return shuffled;
};
const COLORS = getRandomColors();

const Add = () => {
    const { currentUser } = useUserContext();
    const [cuisine, onChangeCuisine] = useInput('');
    const [nameOfIngredient, onChangeNameOfIngredient] = useInput('');
    const [amountOfIngredient, onChangeAmountOfIngredient] = useInput('');
    const [unitOfIngredient, onChangeUnitOfIngredient] = useInput('');
    const [ingredients, setIngredients] = useState<IUsedIngredient[]>([]);
    const [steps, setSteps] = useState<IStep[]>([{ sequence: 1 }]);
    const [description, onChangeDescription, setDescription] = useInput('');
    const [url, setUrl] = useState('');

    const onSubmitForm = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!cuisine || !steps) return;
            try {
                // Object 업로드
                const recipe: IRecipe = {
                    owner: currentUser?.uid ?? GUEST,
                    cuisine,
                    steps: steps.slice(0, -1),
                    ingredients: [{ name: 'hell', unit: 'point' }],
                    isBest: false,
                    isNew: false,
                };
                const docRef = await addDoc(collection(db, 'recipe'), recipe);
                console.log('success', docRef);

                // firebase storage에 업로드
                // uploadSteps(target);
            } catch (error: any) {
                console.dir(error);
            }
        },
        [cuisine, steps, currentUser],
    );

    const onClickAddIngredientButton = useCallback(() => {
        let existingOne = ingredients.find((ingredient) => ingredient.ingredient.name === nameOfIngredient);
        setIngredients((prev) => {
            if (existingOne) {
                existingOne = { ...existingOne, amount: Number(existingOne.amount) + Number(amountOfIngredient) };
                return [...prev.filter((ingredient) => ingredient.ingredient.name !== nameOfIngredient), existingOne];
            } else {
                const newIngredient: IUsedIngredient = {
                    amount: amountOfIngredient,
                    ingredient: {
                        name: nameOfIngredient,
                        unit: unitOfIngredient,
                    },
                };
                return [...prev, newIngredient];
            }
        });
    }, [ingredients, amountOfIngredient, nameOfIngredient, unitOfIngredient]);

    const onClickAddStepButton = useCallback(() => {
        if (description) {
            setSteps((prev) =>
                [...prev, { sequence: prev[prev.length - 1].sequence++, description, url }].sort((a, b) => {
                    return a.sequence - b.sequence;
                }),
            );
            setDescription('');
            setUrl('');
        }
    }, [description, setDescription, url]);

    return (
        <DefaultLayout>
            <WideForm onSubmit={onSubmitForm}>
                <Label>
                    <span>요리명</span>
                    <div>
                        <Input value={cuisine} type="text" onChange={onChangeCuisine} />
                    </div>
                </Label>

                <LabelsGroup>
                    <span>재료명</span>
                    <div>
                        <Input value={nameOfIngredient} type="text" onChange={onChangeNameOfIngredient} />
                    </div>
                    <span>개수</span>
                    <div>
                        <Input value={amountOfIngredient} type="number" min="0" onChange={onChangeAmountOfIngredient} />
                    </div>
                    <span>단위</span>
                    <div>
                        <Input value={unitOfIngredient} type="text" onChange={onChangeUnitOfIngredient} />
                    </div>
                    <SmallButton type="button" onClick={onClickAddIngredientButton}>
                        재료 추가
                    </SmallButton>
                </LabelsGroup>
                <ListWrapper>
                    {ingredients.map((ingredient, i) => {
                        return (
                            <ListItem key={ingredient.ingredient.name} color={COLORS[i]}>
                                {ingredient.ingredient.name}&nbsp;{ingredient.amount}
                                {ingredient.ingredient.unit}
                            </ListItem>
                        );
                    })}
                </ListWrapper>

                <Label>
                    <span>description</span>
                    <div>
                        <TextArea value={description} onChange={onChangeDescription}></TextArea>
                    </div>
                </Label>
                <Label>
                    <span>사진을 추가하세요!</span>
                    <FileUploader />
                </Label>

                <ButtonsContainer>
                    <SmallButton type="button" onClick={onClickAddStepButton}>
                        Add Step
                    </SmallButton>
                    <SmallButton type="submit">Submit</SmallButton>
                </ButtonsContainer>

                {/* step 임시 저장 => 클릭 시 불러와서 수정 */}

                <Swiper
                    modules={[Navigation]}
                    style={CustomSwiper}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    centeredSlidesBounds
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                >
                    {steps &&
                        steps.map((step, i) => {
                            return (
                                <SwiperSlide style={CustomSwiperSlide}>
                                    <SlideBackground url={step.url} />
                                    <SildeTitle>Step{i + 1}</SildeTitle>
                                    <br />
                                    <SlideDescription>{step.description}</SlideDescription>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
                {/* step 임시 저장 => 클릭 시 불러와서 수정 */}
            </WideForm>
        </DefaultLayout>
    );
};

export default Add;
