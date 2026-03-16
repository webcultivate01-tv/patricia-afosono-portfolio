import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  // Visual Identity & Branding
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408605/Semente_mm9asy.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408976/IMG_20200203_072300_swqoaf.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408954/IMG_20200122_143800_lq9ce2.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408607/APPM_2006_iqyjvc.gif",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408602/PhysioMateLogo_fundoAzulEscuro_copiar_r7wkrz.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408967/IMG_20200122_143620_jmo0hl.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408961/IMG-20200201-WA0004_n1lcfz.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408956/IMG-20200201-WA0003_lpwami.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408952/IMG-20200201-WA0001_fsc7kc.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408954/IMG_20200122_143638_mwil5j.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408947/IMG-20200201-WA0000_lm4wac.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408944/IMG_20200109_161508_bsbl27.jpg",
    category: "Visual Identity & Branding",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408933/IMG-20200124-WA0003_u4gqqs.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408928/IMG-20200102-WA0000_qmpung.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408923/IMG_20200203_072016_ngvgbt.jpg",
    category: "Visual Identity & Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408913/IMG_20200203_072140_jlzghp.jpg",
    category: "Visual Identity & Branding",
  },
  //  Art & Illustration
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408171/Ilustra_Natal_copiar_hffecl.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408153/cenario_park1_ehzwqk.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408151/Glass_jar_wvciw7.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408151/smashed_can_bmmt7i.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408150/bottle_fawyjm.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408149/bisnaga_l0cdnw.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408147/2026_ilustra%C3%A7ao_Pessoas_su5c6a.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408146/2026_ilustra%C3%A7ao_Mundo_Verde_xb5w2i.png",
    category: "Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408144/2012_Ilustra%C3%A7%C3%A3o_para_capa_de_um_livro_fcjhev.png",
    category: "Art & Illustration",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408143/1996_Album_Gr%C3%A1fico_Set%C3%BAbal_zjlgo8.gif",
    category: "Art & Illustration",
  },

  // Editorial & Publications
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408859/Revista_Hist%C3%B3ria_interior_2_w7v9ek.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408857/Revista_Hist%C3%B3ria_interior_4_shynhf.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408853/Revista_Hist%C3%B3ria_Capa_96_lbrhj0.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408846/Revista_Hist%C3%B3ria_Capa_94_jvkegd.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408842/Revista_Hist%C3%B3ria_interior_3_h55hya.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408842/Revista_Hist%C3%B3ria_interior_5_suz7aj.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408834/Revista_Hist%C3%B3ria_interior_1_ldoooh.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408829/Livro_-_edi%C3%A7%C3%A3o_completa_ni0bcz.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408828/Borda_d_agua_Capa_fshbcm.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408795/IMG_20221007_110553_nukkhs.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408783/DiaMulher_Insta_ygiupy.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408782/Flyer_Troia_Cruze_frente_iy1irt.gif",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408782/INSTA_HoraInverno2020_bcpxp2.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408781/DiaMulher_xk5bms.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408779/Boarding_Pass_B_dw6as4.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408778/Boarding_Pass_A_t3bo5p.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408775/CastingInterno_fhcuyv.png",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408772/VivaibPoster_h1rvp7.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408771/IMG_20221007_110626_bwglhb.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408771/ArtigoPerigososBagagem_kex8bw.jpg",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408770/LiberdadeDuradoura_g6tibg.gif",
    category: "Editorial & Publications",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408769/ReduceReuseRecycle_ohv3qd.jpg",
    category: "Editorial & Publications",
  },

  // Icons
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408718/Worker_z3mhgt.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408717/Passengers_pzjjuq.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408715/Money_Invested_l9llcn.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408713/Flights_Handled_tc9ci8.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408711/Clients_Worldwide_xxvieu.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408711/Airport_Locations_avyrox.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408710/BT_Valuables_orobvt.png",
    category: "Icons",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408710/BT_Meds_bs9juj.png",
    category: "Icons",
  },

  // Logotypes
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408617/G_Zero_lodoz3.jpg",
    category: "Logotypes",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408607/APPM_2006_iqyjvc.gif",
    category: "Logotypes",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408609/Logo_Clinica_Arrabida_cqin2o.png",
    category: "Logotypes",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408605/Semente_mm9asy.jpg",
    category: "Logotypes",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408604/PhysioMateLogoPrincipal_paraFundoBranco_fgugx7.png",
    category: "Logotypes",
  },

  // Signage
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408560/IMG_20200122_143752_cmu5os.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408560/IMG_20200122_143814_k10jdi.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408542/MA_Totem_Carga_3_qealtt.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408541/5_20231030_150538_gkntbr.jpg",
    category: "Signage",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408535/IMG_20200122_143831_kulnwn.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408532/Sinaletica_Groundforce_Portugal_-_Ed_31_-_HOC_frmdm2.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408523/Portas_u8xpj2.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408520/MA_Carga_sinaletica_fachada_2_oqa2az.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408514/IMG_20230627_110404_fafyht.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408514/IMG_20230627_110404_fafyht.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408508/GF_Acesso_Reservado_vlsheb.jpg",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408509/Ecoponto_-_Amarelo_dfshsm.png",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408508/Ecoponto_-_Filtros_de_%C3%81gua_sf1nom.png",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408507/Ecoponto_-_Preto_tzbj0i.png",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408503/Ecoponto_-_EPI_rsmzbh.png",
    category: "Signage",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408501/Ecoponto_-_Cinza_rf2r21.png",
    category: "Signage",
  },
  {
    url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    category: "Animation",
  },

  // Motion Design & Merchandising
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408426/RBF_2_2020_rid4tt.jpg",
    category: "Motion Design & Merchandising",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408414/RBF_1_2020_nsdyqk.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408403/IMG_20230303_143226_sdabje.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408401/IMG_20230303_144224_auxfmf.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408399/PEN_2020_pw72og.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408394/Tapete_1_zsf01q.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408393/Lanyard_1_cnvut6.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408390/IMG_20230303_143330_c89amd.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408389/IMG_20230303_143425_esj14s.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408378/GuardaChuva_marcaB_w2kvu4.png",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408376/Etiqueta_Bagagem_1_qo57i5.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408376/Balan%C3%A7a_20221128_142432_qjhdo5.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408376/Botle_ReduceReuseRecycle_s9m2il.png",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408367/MA_20240531_Totebag_wgvgcj.jpg",
    category: "Motion Design & Merchandising",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408364/MA_20240531_Garrafa_rddwtv.jpg",
    category: "Motion Design & Merchandising",
  },

  // Employer Branding
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408331/IMG_20240104_072906_gkfulb.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408313/IMG-20191212-WA0008_c5xfw4.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408329/IMG_20240104_072821_o12ell.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408322/Postal_Antiguidade_ycxqpx.png",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408321/IMG_20240104_072716_p6pkxs.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408318/IMG_20221229_134939_sibjwy.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408313/logo_20_RGB_blue_otlesn.png",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408312/IMG_20240104_072539_mhrdij.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408310/IMG_20240104_072426_vg2lsj.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408309/IMG_20231212_114556_vq5y8g.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408299/IMG_20191221_111948_u0gvso.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408299/16_anos_-_IMG_4075_h8yboe.jpg",
    category: "Employer Branding",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408294/IMG_20221205_083851_grhnlz.jpg",
    category: "Employer Branding",
  },

  // Photo & Video
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408260/Fotomontagem_Faro_2_n9xktf.png",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408255/3_ibvlbo.png",
    category: "Photo & Video",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408253/2_ifbca9.png",
    category: "Photo & Video",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408253/IBlaptop_qi0dpu.jpg",
    category: "Photo & Video",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408247/1_p9x2jo.png",
    category: "Photo & Video",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408244/4_bhcbht.png",
    category: "Photo & Video",
  },

  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408203/making_of_1_ik59sz.png",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408200/making_of_2_fnbgo6.png",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408196/making_of_3_r7tee4.jpg",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408196/making_of_7_jicp6j.jpg",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408195/making_of_6_m5fitn.jpg",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408194/making_of_5_rle7ep.jpg",
    category: "Photo & Video",
  },
  {
    url: "https://res.cloudinary.com/duw0fnlqe/image/upload/v1773408194/making_of_4_fzvjyt.jpg",
    category: "Photo & Video",
  },

  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    category: "Employer Branding",
  },
];

const categories = [
  "All",
  "Visual Identity & Branding",
  "Editorial & Publications",
  "Icons",
  "Logotypes",
  "Signage",
  "Motion Design & Merchandising",
  "Digital Experiences UX, UI, Web & Apps",
  "Expositions & International Projects",
  "Employer Branding",
  "Photo & Video",
  "Art & Illustration",
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelected(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Featured
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Work
            </span>
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
            Selected branding and communication design projects showcasing
            strategy, creativity, and visual storytelling.
          </p>
        </motion.div>
        {/* CATEGORY FILTER */}
        {/* MODERN CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border

      ${
        activeCategory === cat
          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-lg"
          : "bg-white/60 text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600"
      }`}
            >
              {cat}

              {/* Active glow */}
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 -z-10 blur-md opacity-40"
                />
              )}
            </motion.button>
          ))}
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredImages.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelected(index)}
            >
              <img
                src={img.url}
                alt="portfolio"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <div className="text-white transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-lg font-semibold">{img.category}</h3>
                  <p className="text-sm text-gray-200">
                    Creative Design Project
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* VIEW MORE BUTTON */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition transform hover:scale-105"
            >
              View More Work
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-8 right-10 text-white text-4xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <button
              className="absolute left-10 text-white text-6xl"
              onClick={prevImage}
            >
              ‹
            </button>

            <motion.img
              key={selected}
              src={filteredImages[selected].url}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] rounded-xl shadow-2xl"
            />

            <button
              className="absolute right-10 text-white text-6xl"
              onClick={nextImage}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
