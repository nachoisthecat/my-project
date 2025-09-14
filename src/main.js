const animalData = {
    lion: {
        name: "사자 (Lion)",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&h=400&fit=crop",
        description: "사자는 '백수의 왕'이라 불리며 아프리카 사바나의 최상위 포식자입니다. 무리를 이루어 생활하며, 주로 암사자들이 사냥을 담당하고 수사자는 무리를 보호하는 역할을 합니다.",
        characteristics: [
            "체중: 수컷 150-250kg, 암컷 110-180kg",
            "특징: 수컷만 갈기를 가지고 있음",
            "사회성: 무리(프라이드) 단위로 생활",
            "사냥: 주로 밤과 새벽에 활동",
            "수명: 야생에서 10-14년"
        ]
    },
    elephant: {
        name: "코끼리 (Elephant)",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop",
        description: "아프리카코끼리는 지구상에서 가장 큰 육상동물입니다. 뛰어난 기억력과 지능을 가지고 있으며, 가족 단위로 강한 유대감을 형성합니다. 코는 40,000개 이상의 근육으로 구성되어 있습니다.",
        characteristics: [
            "체중: 4-7톤",
            "특징: 큰 귀와 긴 코(코는 약 2미터)",
            "지능: 높은 지능과 뛰어난 기억력",
            "사회성: 모계 중심의 가족 단위 생활",
            "수명: 60-70년"
        ]
    },
    buffalo: {
        name: "아프리카물소 (Buffalo)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mSAfpZR60aPSIkmzj5uCSirIQyirxhnip5a7eB5pRYx5r1KcZEyrauG5EPSnvzkzcBGKJ8Zl18FAn_Ph0MI9Im9qnH53o3zA2pNRzw",
        description: "아프리카물소는 빅5 중에서도 특히 위험한 동물로 알려져 있습니다. 거대한 몸집과 날카로운 뿔을 가지고 있으며, 무리를 이루어 이동하면서 서로를 보호합니다.",
        characteristics: [
            "체중: 500-900kg",
            "특징: 크고 구부러진 뿔",
            "성격: 예측하기 어려운 공격적 성향",
            "사회성: 수백 마리 단위의 대규모 무리",
            "수명: 15-25년"
        ]
    },
    leopard: {
        name: "표범 (Leopard)",
        image: "https://img.freepik.com/premium-photo/leopard-serengeti-national-reserve_191971-10972.jpg",
        description: "표범은 빅5 중 가장 은밀하고 적응력이 뛰어난 동물입니다. 아름다운 점무늬(로제트)를 가지고 있으며, 뛰어난 등반 능력으로 나무 위에서 사냥감을 보관하기도 합니다.",
        characteristics: [
            "체중: 수컷 40-90kg, 암컷 30-60kg",
            "특징: 로제트 무늬의 아름다운 털",
            "사냥: 단독 사냥꾼, 주로 야행성",
            "능력: 뛰어난 등반과 수영 능력",
            "수명: 야생에서 12-17년"
        ]
    },
    rhino: {
        name: "코뿔소 (Rhino)",
        image: "https://i.namu.wiki/i/OLElTiPbdffslVP_eMW-IS80McrPDpqJ5P6QmUM33AWAibgvOKYCONVfAuQS7LIxETD9I-qvwkEXNzqj9RD5kA.webp",
        description: "코뿔소는 선사시대부터 지구상에 존재해온 고대 동물입니다. 거대한 뿔과 두꺼운 피부를 가지고 있으며, 시야는 좋지 않지만 뛰어난 청각과 후각을 가지고 있습니다.",
        characteristics: [
            "체중: 1-3톤",
            "특징: 1-2개의 큰 뿔",
            "피부: 두꺼운 회색 피부 (갑옷 같은)",
            "감각: 시야는 나쁘지만 청각, 후각 발달",
            "수명: 35-50년"
        ]
    }
};

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 동물 카드 클릭 이벤트 등록
    document.querySelectorAll('.animal-card').forEach(card => {
        card.addEventListener('click', () => {
            const animal = card.dataset.animal;
            showModal(animal);
        });
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' || e.key === 'Escape') {
            closeModal();
        }
    });
});

function showModal(animal) {
    const data = animalData[animal];
    
    // 모달 정보 설정
    document.getElementById('modal-image').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('modal-title').textContent = data.name;
    document.getElementById('modal-description').textContent = data.description;
    
    // 특징 목록 생성
    const characteristicsList = document.getElementById('modal-characteristics');
    characteristicsList.innerHTML = '';
    data.characteristics.forEach(characteristic => {
        const li = document.createElement('li');
        li.textContent = characteristic;
        characteristicsList.appendChild(li);
    });
    
    // 모달 표시
    const modalBackdrop = document.getElementById('modal-backdrop');
    modalBackdrop.classList.add('show');
    
    // 페이지 스크롤 방지
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalBackdrop = document.getElementById('modal-backdrop');
    modalBackdrop.classList.remove('show');
    
    // 페이지 스크롤 복원
    document.body.style.overflow = 'auto';
}