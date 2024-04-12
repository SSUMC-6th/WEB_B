document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('todoinput');
    const planList = document.getElementById('planul');
    const doneList = document.getElementById('doneul');

    function createDeleteButton(clickHandler) {
        const button = document.createElement('button'); // 버튼 요소 생성
        button.textContent = '삭제'; // 버튼에 텍스트 추가
        button.classList.add('button'); // 클래스 추가
        button.addEventListener('click', clickHandler); // 클릭 이벤트 핸들러 등록
        return button;
    }

    function moveItemToDone(item) {
        const deleteButton = createDeleteButton(function() {
            doneList.removeChild(doneItem); // 완료 목록에서 해당 항목 제거
        });
        const doneItem = item.cloneNode(true); // 항목 복제
        doneItem.removeChild(doneItem.querySelector('button')); // 완료 버튼 제거
        doneItem.appendChild(deleteButton); // 삭제 버튼 추가
        doneList.appendChild(doneItem); // 수정된 항목을 완료 목록에 추가
        planList.removeChild(item); // 할 일 목록에서 해당 항목 제거
    }

    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // 기본 엔터 동작 막기
            const todoText = inputField.value.trim(); // 입력 내용 가져오기
            if (todoText !== '') {
                const listItem = document.createElement('li'); // 새로운 목록 항목 생성
                listItem.textContent = todoText; // 입력 내용을 항목에 추가
                const button = document.createElement('button'); // 완료 버튼 생성
                button.classList.add('button'); // 클래스 추가

                button.textContent = '완료'; // 버튼에 텍스트 추가
                button.addEventListener('click', function() {
                    moveItemToDone(listItem); // 완료 버튼 클릭 시 항목 이동
                });
                listItem.appendChild(button); // 버튼을 항목에 추가
                planList.appendChild(listItem); // 항목을 "해야 할 일" 목록에 추가
                inputField.value = ''; // 입력창 비우기
            }
        }
    });

    doneList.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') { // 클릭한 요소가 버튼인지 확인
            const listItem = e.target.parentNode; // 버튼의 부모 요소인 li 가져오기
            doneList.removeChild(listItem); // 해당 항목 제거
        }
    });
});


