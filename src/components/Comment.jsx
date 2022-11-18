/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createProductReview } from '../actions/productActions';

import Loader from './loaders/Loader';
import Rating from './Rating';

import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

function Comment({ product, params }) {
  // console.log(product);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, successProductReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(params.id, {
        rating,
        comment
      })
    );
  };

  return (
    <section className="flex flex-col gap-8 mb-8">
      {product.reviews.length === 0 && (
        <h1 className="text-white/80 text-sm">
          Sin comentarios para este producto, se el primero en comentar
        </h1>
      )}
      {product.reviews.map((review) => (
        <div key={review._id} className="flex flex-col gap-2">
          <span className="flex justify-between items-center">
            <Rating value={review.rating} color="#f8e825" />
            <h1 className="text-white/50 text-sm">
              {review.createdAt.substring(0, 10)}
            </h1>
          </span>
          <p className="text-white/80 text-sm capitalize">{review.comment}</p>
        </div>
      ))}
      {userInfo ? (
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <span className="flex flex-col gap-1">
            <h1 className="text-white/80 text-sm font-bold">
              Califica el producto
            </h1>
            <span>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    style={{ color: '#f8e825' }}
                    key={index}
                    className={
                      index <= (hover || rating) ? 'fas fa-star' : 'far fa-star'
                    }
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  />
                );
              })}
            </span>
            {errorProductReview && (
              <small className="text-red-500/80 text-xs">
                {errorProductReview}
              </small>
            )}
          </span>
          <span className="flex flex-col gap-2">
            {/* <label
              className="text-white/80 text-sm font-bold"
              htmlFor={comment}
            >
              Escriba una reseña
            </label> */}
            <textarea
              style={{
                resize: 'none'
              }}
              className="outline-none bg-zinc-800/50 text-white/80 p-2 rounded-md text-sm"
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe un comentario"
              cols="30"
              rows="4"
            />

            {!successProductReview && (
              <small className="text-white/60 text-xs">
                Tu comentario será publicado
              </small>
            )}
            {successProductReview && (
              <small className="text-green-500/80 text-xs">
                Tu comentario ha sido publicado
              </small>
            )}
          </span>
          <button
            disabled={loadingProductReview}
            type="submit"
            className="w-44 justify-center border rounded-md border-white/20 bg-zinc-800 cursor-pointer flex flex-row gap-1"
          >
            {!loadingProductReview && (
              <span className="flex flex-row gap-1 py-1 px-2">
                <h1 className="text-sm text-white/80 ">Publicar Comentario</h1>
              </span>
            )}
            {loadingProductReview && (
              <span className="flex justify-center py-1 px-2">
                <Loader color="#eee" size={20} />
              </span>
            )}
          </button>
        </form>
      ) : (
        <span className="w-80 flex justify-center  fill-white/30 py-1 px-2 border rounded-md border-white/20 bg-zinc-800">
          <h1 className="text-white/50 text-sm">
            Por favor{' '}
            <Link to="/auth/login" className="underline hover:text-white/80">
              {' '}
              inicia sesión
            </Link>{' '}
            para comentar
          </h1>
        </span>
      )}
    </section>
  );
}

export default Comment;
