const data = [
    {
    name:"brachialis",
    description:"A muscle in the upper arm that flexes the elbow joint. It lies deeper than the biceps brachii, and makes up part of the floor of the region known as the cubital fossa. The brachialis is the prime mover of elbow flexion. While the biceps brachii appears as a large anterior bulge on the arm and commands considerable interest among body builders, the brachialis underlying it actually generates about 50% more power and is thus the prime mover of elbow flexion",
    image:"./images/brachialis.png"
},
 {
    name:"bicipital aponeurosis",
    description:"Also known as lacertus fibrosus, it is a broad aponeurosis of the biceps brachii which is located in the cubital fossa of the elbow and separates superficial from deep structures in much of the fossa.",
    image:"./images/bicipital_aponeurosis.png"
},
{
    name:"trapezius",
    description:"One of two large superficial muscles that extend longitudinally from the occipital bone to the lower thoracic vertebrae and laterally to the spine of the scapula (shoulder blade)",
    image:"./images/trapezius.png"
},
{
    name:"Sternocleidomastoid",
    description:"Commonly abbreviated as SCM, a paired muscle in the superficial layers of the side of the neck.",
    image:"./images/scm.png"
},
{
    name:"sternohyoid",
    description:"A thin, narrow muscle attaching the hyoid bone to the sternum, one of the paired strap muscles of the infrahyoid muscles serving to depress the hyoid bone. It is innervated by the ansa cervicalis.",
    image:"./images/Sternohyoid.png"
},
{
    name:"lumbricals",
    description:"Intrinsic muscles of the hand that flex the metacarpophalangeal joints and extend the interphalangeal joints.",
    image:"./images/Lumbricals.png"
},
{
    name:"flexor digitorum superficialis",
    description:"An extrinsic flexor muscle of the fingers at the proximal interphalangeal joints. It is in the anterior compartment of the forearm. It is sometimes considered to be the deepest part of the superficial layer of this compartment, and sometimes considered to be a distinct, intermediate layer of this compartment. It is relatively common for the Flexor digitorum superficialis to be missing from the little finger, bilaterally and unilaterally, which can cause problems when diagnosing a little finger injury",
    image:"./images/FDS.png"
},
{
    name:"bicep brachii",
    description:"Two-headed muscle that lies on the upper arm between the shoulder and the elbow. Both heads arise on the scapula and join to form a single muscle belly which is attached to the upper forearm.",
    image:"./images/bicepBrachii.png"
},
{
    name:"deltoid",
    description:"Is the muscle forming the rounded contour of the shoulder. Anatomically, it appears to be made up of three distinct sets of fibers though electromyography suggests that it consists of at least seven groups that can be independently coordinated by the nervous system.",
    image:"./images/deltoid.png"
},
{
    name:"brachioradialis",
    description:"Flexes the forearm at the elbow. When the forearm is pronated, the brachioradialis tends to supinate as it flexes. In a supinated position, it tends to pronate as it flexes. This also assists the biceps brachii.",
    image:"./images/brachioradialis.png"
},
{
    name:"tricep brachii",
    description:"A large muscle on the back of the upper limb of many vertebrates. It is the muscle principally responsible for extension of the elbow joint (straightening of the arm).",
    image:"./images/tricepBrachii.png"
},
{
    name:"tensor fasciae latae",
    description:"A muscle of the thigh. It is related with the gluteus maximus in function and structure and is continuous with the iliotibial tract, which attaches to the tibia. The muscle assists in keeping the balance of the pelvis while standing, walking, or running.",
    image:"./images/tfl.png"
},
{
    name:"iliopsoas",
    description:"Refers to the joined psoas and the iliacus muscles. The two muscles are separate in the abdomen, but usually merge in the thigh. As such, they are usually given the common name iliopsoas. The iliopsoas muscle joins to the femur at the lesser trochanter, and acts as the strongest flexor of the hip.",
    image:"./images/iliopsoas.png"
},
{
    name:"rectus abdominis",
    description:"Also known as the abdominals, is a paired muscle running vertically on each side of the anterior wall of the human abdomen, as well as that of some other mammals. There are two parallel muscles, separated by a midline band of connective tissue called the linea alba",
    image:"./images/Rectus_abdominis.png"
},
{
    name:"pectoralis major",
    description:"A thick, fan-shaped muscle, situated at the chest (anterior) of the human body. It makes up the bulk of the chest muscles and lies under the breast.",
    image:"./images/pects.png"
},
{
    name:"serratus anterior",
    description:"A muscle that originates on the surface of the 1st to 8th ribs at the side of the chest and inserts along the entire anterior length of the medial border of the scapula.",
    image:"./images/serratus_anterior.png"
},
{
    name:"flexor carpi ulnaris muscle",
    description:"A muscle of the human forearm that acts to flex and adduct (medial deviation) the hand.",
    image:"./images/FCU.png"
},
{
    name:"abductor pollicis brevis",
    description:"A muscle in the hand that functions as an abductor of the thumb.",
    image:"./images/abductor_pollicis_brevis.png"
},
{
    name:"flexor carpi radialis",
    description:"A muscle in the forearm that acts to flex and abduct the wrist",
    image:"./images/Flexor-carpi-radialis.png"
}
]

const labelMusclesData = [
"sternocleidomastoid",
"deltoid",
"pectoralis major",
"rectus abdominis",
"abdominal external oblique",
"pectineus",
"adductor longus",
"sartorius",
"rectus femoris",
"vastus lateralis",
"fibularis longus",
"tibialis anterior",
"occipitofrontalis",
"trapezius",
"pectoralis minor",
"serratus anterior",
"biceps brachii",
"brachialis",
"brachioradialis",
"pronator teres",
"flexor carpi radialis",
"tensor fasciae latae",
"iliopsoas",
"gracilis",
"vastus medialis",
"soleus and gastrocnemius"
]

const labelPosteriorMuscles = [
    "occipitofrontalis",
    "splenius capitis",
    "levator scapulae",
    "supraspinatus",
    "teres minor",
    "infraspinatus",
    "teres major",
    "trceps brachii",
    "serratus posterior inferior",
    "external oblique",
    "gluteus medius",
    "gluteus maximus",
    "semimembranosus",
    "peroneus longus",
    "tibialis posterior",
    "epiccranial aponeurosis",
    "rhomboids",
    "trapezius",
    "deltoid",
    "latissimus dorsi",
    "brachioradialis",
    "extensor carpi radialis",
    "extensor digitorum",
    "extensor carpi ulnaris",
    "flexor carpi ulnaris",
    "gluteus minimus",
    "gemellus muscles",
    "biceps femoris",
    "semitendinosus",
    "gracilis",
    "gastrocnemius",
    "soleus"
]