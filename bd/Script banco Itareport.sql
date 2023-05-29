--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-05-29 11:08:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16467)
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id_categoria integer NOT NULL,
    nome_categoria character varying(50)
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16466)
-- Name: categoria_id_categoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_id_categoria_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 215
-- Name: categoria_id_categoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_categoria_seq OWNED BY public.categoria.id_categoria;


--
-- TOC entry 218 (class 1259 OID 16474)
-- Name: endereco; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.endereco (
    id_endereco integer NOT NULL,
    rua character varying(100),
    numero character varying(5),
    bairro character varying(20),
    cidade character varying(30),
    coordenadas character varying(50)
);


ALTER TABLE public.endereco OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16473)
-- Name: endereco_id_endereco_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.endereco_id_endereco_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.endereco_id_endereco_seq OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 217
-- Name: endereco_id_endereco_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.endereco_id_endereco_seq OWNED BY public.endereco.id_endereco;


--
-- TOC entry 222 (class 1259 OID 16503)
-- Name: imagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.imagem (
    id_imagem integer NOT NULL,
    diretorio_imagem character varying(256)
);


ALTER TABLE public.imagem OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16502)
-- Name: imagem_id_imagem_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.imagem_id_imagem_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.imagem_id_imagem_seq OWNER TO postgres;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 221
-- Name: imagem_id_imagem_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.imagem_id_imagem_seq OWNED BY public.imagem.id_imagem;


--
-- TOC entry 220 (class 1259 OID 16481)
-- Name: report; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.report (
    id_report integer NOT NULL,
    titulo character varying(100),
    descricao character varying(256),
    fk_usuario_cpf character varying(15),
    fk_categoria_id_categoria integer,
    fk_endereco_id_endereco integer
);


ALTER TABLE public.report OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16480)
-- Name: report_id_report_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.report_id_report_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.report_id_report_seq OWNER TO postgres;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 219
-- Name: report_id_report_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.report_id_report_seq OWNED BY public.report.id_report;


--
-- TOC entry 223 (class 1259 OID 16509)
-- Name: report_imagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.report_imagem (
    fk_report_id_report integer,
    fk_imagem_id_imagem integer
);


ALTER TABLE public.report_imagem OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16461)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    nome character varying(70) NOT NULL,
    cpf character varying(15) NOT NULL,
    email character varying(100) NOT NULL,
    senha character varying(30) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 3196 (class 2604 OID 16470)
-- Name: categoria id_categoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id_categoria SET DEFAULT nextval('public.categoria_id_categoria_seq'::regclass);


--
-- TOC entry 3197 (class 2604 OID 16477)
-- Name: endereco id_endereco; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.endereco ALTER COLUMN id_endereco SET DEFAULT nextval('public.endereco_id_endereco_seq'::regclass);


--
-- TOC entry 3199 (class 2604 OID 16506)
-- Name: imagem id_imagem; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagem ALTER COLUMN id_imagem SET DEFAULT nextval('public.imagem_id_imagem_seq'::regclass);


--
-- TOC entry 3198 (class 2604 OID 16484)
-- Name: report id_report; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report ALTER COLUMN id_report SET DEFAULT nextval('public.report_id_report_seq'::regclass);


--
-- TOC entry 3203 (class 2606 OID 16472)
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria);


--
-- TOC entry 3205 (class 2606 OID 16479)
-- Name: endereco endereco_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (id_endereco);


--
-- TOC entry 3209 (class 2606 OID 16508)
-- Name: imagem imagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagem
    ADD CONSTRAINT imagem_pkey PRIMARY KEY (id_imagem);


--
-- TOC entry 3207 (class 2606 OID 16486)
-- Name: report report_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id_report);


--
-- TOC entry 3201 (class 2606 OID 16465)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (cpf);


--
-- TOC entry 3210 (class 2606 OID 16492)
-- Name: report report_fk_categoria_id_categoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_categoria_id_categoria_fkey FOREIGN KEY (fk_categoria_id_categoria) REFERENCES public.categoria(id_categoria);


--
-- TOC entry 3211 (class 2606 OID 16497)
-- Name: report report_fk_endereco_id_endereco_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_endereco_id_endereco_fkey FOREIGN KEY (fk_endereco_id_endereco) REFERENCES public.endereco(id_endereco);


--
-- TOC entry 3212 (class 2606 OID 16487)
-- Name: report report_fk_usuario_cpf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_fk_usuario_cpf_fkey FOREIGN KEY (fk_usuario_cpf) REFERENCES public.usuario(cpf);


--
-- TOC entry 3213 (class 2606 OID 16517)
-- Name: report_imagem report_imagem_fk_imagem_id_imagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report_imagem
    ADD CONSTRAINT report_imagem_fk_imagem_id_imagem_fkey FOREIGN KEY (fk_imagem_id_imagem) REFERENCES public.imagem(id_imagem);


--
-- TOC entry 3214 (class 2606 OID 16512)
-- Name: report_imagem report_imagem_fk_report_id_report_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.report_imagem
    ADD CONSTRAINT report_imagem_fk_report_id_report_fkey FOREIGN KEY (fk_report_id_report) REFERENCES public.report(id_report);


-- Completed on 2023-05-29 11:08:28

--
-- PostgreSQL database dump complete
--

